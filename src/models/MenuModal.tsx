import { MenuModalProp } from './MenuModalProp';
import ModalForm from '../components/Modal';

export function MenuModal({ showMenuModal, setShowMenuModal, children }: MenuModalProp) {
    return (
        <ModalForm visible={showMenuModal} onCancel={() => {
            setShowMenuModal(false);
        }}>

            <div>{children}</div>

        </ModalForm>

    );

}
