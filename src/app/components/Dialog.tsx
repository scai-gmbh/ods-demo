"use client";

import { Fragment, useState } from "react";
import { ODSButton, ODSDialog, ODSDialogContent } from "@telekom-ods/react-ui-kit-base";

export const Dialog = () => {
    const [showDialog, setShowDialog] = useState(true);
    return (
        <Fragment>
            <ODSDialog open={showDialog}>
                <ODSDialogContent
                    showCloseButton={false}
                    headerText="Some Header text with missing padding or margins"
                    contentSlot={
                        <>
                            The header of this dialog is missing its variables, like
                            <ul>
                                <li>var(--ODSDialog-Title-font);</li>
                                <li>var(--ODSDialog-Title-margin);</li>
                            </ul>
                        </>
                    }
                    actionSlot={
                        <>
                            <ODSButton label={"Close"} onClick={() => setShowDialog(false)} />
                        </>
                    }
                ></ODSDialogContent>
            </ODSDialog>
            <ODSButton label={"Open"} onClick={() => setShowDialog(true)} />
        </Fragment>
    );
};
