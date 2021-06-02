import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './App';

import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      name: '',
      modalInputName: ''
    };
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    this.setState({ name: this.state.modalInputName });
    this.modalClose();
  }

  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({
      modalInputName: '',
      modal: false
    });
  }

  render() {
    return (
      <div className="App">
        <a href="javascript:;" onClick={e => this.modalOpen(e)}>
          <img
            border="0"
            className="btn"
            src="https://lh3.googleusercontent.com/V8hstekD_tRWfm88JgHhHuhMyH6IaMKa0uYMYvD_2Tyh6HyWTpg5LUBZKPiA04q6e3iaehLvFHtfYIHN5ZO8s2MEJrR-784HU6PhhZ05DvB0HMnvvfK9HcaGG-kC3nDKKFKsDxgFwU1ue5Idq1ioV8xPD2tRVm3lkjZyceEIQCQ9gPHaec2TclNNq27kXlZvoW469upbI7yuLnzJwJ1A4BJsUVRXI6px91r_82k31j9g_2WK7UjioH1vNjmi9LR2Ob6MmJq_j26wj76h5H2mWa85b6tEiQxV6OAYqjpDWM8tjWCwjSA8OT42Ana6NhtlnhXo3EhHjwB2mB0ntL6ZT6wPTW4yEYfV-hamZ1KHp6mk0DXLs9FywcX9j-OwWTZHWQ6hk3Tkp75s5L04J6qNavPqKkiskJYR2fhqDNbaoFduLXDAZ6LAYO1wdUMVbcPaChNHl1M9Fg3-KGOgWYf0itihazxbYTM9ODOXBZeMPhJAbvkdw4n8_85-Vsssp6QdYasxiMKY0hH9kuyUnp8ORrqKffRy0VRB-yWehv2SfiLssAXNmJCupuW0gZmgo91rSq8Hrc-4yWhkEPi6JyYvoWSohO6EbJLGUuleRUhTMpG70G1HXjAjCJqk5IeMmyOS1tKMx_87bZN3m-2ioipqxK7pSWp0lWqeGzfWta7RGzK4sIvHdyHvQ0aoRBivN0E0CoA7jcgiZ091va60DtmlYRk=w660-h491-no?authuser=0"
            width="200"
            height="200"
          />
        </a>
        <Modal show={this.state.modal} handleClose={e => this.modalClose(e)}>
        
          <br />
        </Modal>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
