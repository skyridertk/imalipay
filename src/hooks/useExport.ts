import { TableColumnType } from "antd";
import xlsx from "better-xlsx";
import objectPath from "object-path";
import { saveAs } from "file-saver";


const useExport = <RecordType extends object>({
    columns,
    data,
    fileName,
    pdfTheme
}: {
    columns: TableColumnType<RecordType>[];
    data: RecordType[];
    fileName: string;
    pdfTheme?: "striped" | "grid" | "plain";
}) => {
    const onExcelPrint = () => {
        const file = new xlsx.File();
        const sheet = file.addSheet("Sheet1");
        const headerRow = sheet.addRow();
        columns.forEach(({ title, render }) => {
            if (render) return;
            const cell = headerRow.addCell();
            cell.value = title;
        });
        data.forEach((record) => {
            const row = sheet.addRow();
            columns.forEach(({ dataIndex, render }) => {
                if (render) return;
                const cell = row.addCell();
                cell.value = objectPath.get(record, dataIndex as objectPath.Path);
            });
        });

        file.saveAs('blob').then((blob: Blob) => {
            saveAs(blob, `${fileName}.xlsx`);
        })
    };


    return {
        onExcelPrint
    }
};

export default useExport;