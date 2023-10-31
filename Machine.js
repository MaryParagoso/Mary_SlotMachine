class Machine extends React.Component {
    render() {
        const { s1, s2, s3 } = this.props;
        const result = (s1 === s2) && (s2 === s3);
        return (
            <div id="machine">
                {s1}{s2}{s3}
                {result ? <p>You win!</p> : <p>You lose!</p>}
            </div>
        );
    }
}
