import React from "react";

interface IUSER {
    ID_PLAYER: number;
    USERNAME: string;
    EMAIL: string;
    CREATEDATE: Date;
}

interface INews {
    ID_NEWS: number,
    ID_PLAYER: number,
    IMG: string,
    TEXT: string,
    TITLE: string,
    HREF: string
}

const Admin = () => {
    return (
        <div className="Admin_Container">
            <div className="Players_Table">
                Игроки
                <table>

                </table>
            </div>
            <div className="NewsConfirm_Table">
                Новости на ожидании
                <table>

                </table>
            </div>
        </div>
    )
}

export default Admin