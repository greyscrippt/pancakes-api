const monad = (logs, msg) => {
    const currentLogId = logs.length;

    console.log(
        'Stage ' + currentLogId + ': ' +
        msg
    );

    return [
        ...logs,
        {
            id: currentLogId,
            message: msg,
        }
    ];
};
var logs = [];
const addToLogs = (msg) => (logs = monad(logs, msg));

export default addToLogs;