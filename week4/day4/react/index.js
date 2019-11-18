class AppA extends React.Component {
  
    render () {
      return (
        <button onClick={this.props.changeNameFunc}>
          change name: {this.props.name}
        </button>
      )
    }
  }
  
  class AppB extends React.Component {
    
   

    render () {

      return (
        <button onClick={this.props.addSkillFunc}>
          change skills: {this.props.skill.map(s => s.name)}
        </button>
      )
    }
  }
  
  class App extends React.Component {
    
    state = { 
      name: 'john' ,
      skills: [] ,
      status: true
    }
  
  
    handleChangeName = () => {
        if(this.state.status === true){
            this.setState({
                name: 'smith',
                status: false
              })
        } else {
            this.setState({
                name: 'john',
                status: true
              })
        }
      }
    
    handleChangeSkill = () => {

        if(this.state.status === true){
            this.setState({
                skills: [
                  { id: 3, name: 'Java' },
                  { id: 4, name: 'C++' },
                  { id: 5, name: 'Swift' }
                ],
                status: false
              })
        } else {
            this.setState({
                skills: [],
                status: true
              })
        }

      
    }
    
    render () {

      return (
        <div>
          <AppA changeNameFunc={this.handleChangeName} name={this.state.name} />
          <AppB skill={this.state.skills}  addSkillFunc={this.handleChangeSkill} />
        </div>
      )
    }
    
  }

  
const app = <App />

ReactDOM.render(app, document.getElementById('contents'));


