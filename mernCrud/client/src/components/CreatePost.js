import React, {Component} from 'react';
import axios from 'axios';

export default class CreatePost extends Component{

    constructor(props){
        super(props);
        this.state={
            topic:"",
            description:"",
            postCategory:""
        }
    }

    handleInputChange = (e)=>{
        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const {topic,description,postCategory} = this.state;

        const data={
            topic:topic,
            description:description,
            postCategory:postCategory
        }
        console.log(data)

        axios.post("/post/save",data).then((res)=>{
            if(res.data.success){
                this.setState(
                    {
                    topic:"",
                    description:"",
                    postCategory:""
                    }
                )
            }
        })
    }

    render(){
        return(
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Create New Post</h1>
                <form>
                    <div className="form-group">
                        <label >Topic</label>
                        <input type="text"
                               className="form-control"
                               name="topic"
                               value={this.state.topic}
                               onChange={this.handleInputChange}
                               placeholder="Enter Topic"></input>
                    </div>
                    <div className="form-group">
                        <label >Description</label>
                        <input type="text"
                               className="form-control"
                               name="description"
                               value={this.state.description}
                               onChange={this.handleInputChange}
                               placeholder="Enter Description"></input>
                    </div>
                    <div className="form-group">
                        <label >Post Category</label>
                        <input type="text"
                               className="form-control"
                               name="postCategory"
                               value={this.state.postCategory}
                               onChange={this.handleInputChange}
                               placeholder="Enter Post Category"></input>
                    </div>
                    <button type="submit" className="btn btn-success" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                    <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>
                </form>
            </div>
        )
    }
}