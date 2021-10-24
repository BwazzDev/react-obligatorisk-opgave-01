import {Fragment} from "react";

const Modal = props => {
    return (
        <Fragment>
            <div className="backdrop" onClick={props.close}/>
            <div className="modal">
                {props.children}
            </div>
        </Fragment>
    )
};

export default Modal;