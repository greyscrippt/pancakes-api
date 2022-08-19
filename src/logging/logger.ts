type LogType = {
    id: number,
    msg: string,
}

const monad = (logHistory: LogType[], currentMsg: string) => {
    const currentLogId: number = logHistory.length;
    const newLog: LogType = {
        id: currentLogId,
        msg: currentMsg,
    }

    console.log(
        'Stage ' + currentLogId + ': ' +
        currentMsg,
    );

    const newLogHistory: LogType[] =  [
        ...logHistory,
        newLog,
    ];

    return newLogHistory;
};

var logs: LogType[] = [];
const addToLogs = (msg: string) => (logs = monad(logs, msg));

export default addToLogs;