import React, { useEffect, useState } from "react";
import { Alert, AlertTitle, Snackbar } from "@mui/material";

export default function Flash({success, error}:{success?: string, error?:string}) {
    const [open, setOpen] = useState(success ? true : false);
    useEffect(() => {
        setOpen(true);
    }, [success]);
    return (
        <>
            {success && (
                <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    open={open}
                    autoHideDuration={5000}
                    onClose={() => {
                        setOpen(false);
                    }}
                    key={"top" + "right"}
                >
                    <Alert variant="filled" severity="success">
                        <AlertTitle>Sucesso!</AlertTitle>
                        {success}
                    </Alert>
                </Snackbar>
            )}
            {error && (
                <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    open={open}
                    autoHideDuration={6000}
                    onClose={() => {
                        setOpen(false);
                    }}
                    key={"top" + "right"}
                >
                    <Alert variant="filled" severity="error">
                        <AlertTitle>Ooops! Tivemos um erro.</AlertTitle>
                        {error}
                    </Alert>
                </Snackbar>
            )}
        </>
    );
}