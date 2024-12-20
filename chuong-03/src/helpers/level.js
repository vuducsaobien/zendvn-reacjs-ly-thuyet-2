export function getLevel(level) {
    switch (level) {
        case 0:
            return <span className="label label-default">Small</span>
        case 1:
            return <span className="label label-info">Medium</span>
        case 2:
            return <span className="label label-danger">High</span>
        default:
            return <span className="label label-default">Small</span>
    }
}
