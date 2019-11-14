class App extends React.Component {

    render(){

        const borderSytle = {
            border: "2px black solid"
        }

        const fontStyle = {
            fontSize: '13rem'
        }
        const dotStyle = {
            color: "red",
            fontSize: '10rem'
        }

        return(
            <div>
                <Content borderColor={borderSytle} size={fontStyle} dotColor={dotStyle} />
            </div>
        )
    }

}

class Content extends React.Component{

    render(){
        return(
            <div style={this.props.borderColor}>
                <span style={this.props.size}>L</span>
                <span style={this.props.dotColor}>.</span>
                <span style={this.props.size}>O</span>
                <span style={this.props.dotColor}>.</span>
                <span style={this.props.size}>V</span>
                <span style={this.props.dotColor}>.</span>
                <span style={this.props.size}>E</span>
            </div>
        )
    }
    

}



const app = <App />

ReactDOM.render(app, document.getElementById('contents'));


<xxx />


class XXX extends React.Component{

    render(){

        return(
            <div>
                <p></p>
            </div>
        )



    }








}