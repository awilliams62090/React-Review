import React, {Component} from "react";
import {Form, FormGroup, Label, Input} from "reactstrap";
import styled from "styled-components";

const ClearBtn = styled.span`
    color: gray; 
    font-weight: 500; 
    font-size: 24px; 
    position: absolute; 
    top: 0; 
    right: 10px; 
    cursor: pointer; 

    :hover{
        color: purple;
    }

`

class SearchBar extends Component{
    state={
        search: ""
    }


    handleInputChange = (event) => {
        const {value} = event.target;
        console.log(value);
        this.setState({search: value});
        console.log(this.state.search)
        this.props.searchYouTube(value)
    }
    
    render(){
        return (
            <Form onSubmit={(event) => event.preventDefault()}>
                <FormGroup style={{position: "relative", marginTop: "20px"}}>
                    <Label for="search" hidden>Search</Label>
                    <Input 
                        type="search" 
                        name="search" 
                        id="search" 
                        placeholder="What would you like to watch?"
                        value={this.state.search}
                        onChange={this.handleInputChange}
                    />
                    <ClearBtn onClick={()=>this.setState({search:""})}>X</ClearBtn>
                </FormGroup>
            </Form>
        )
    }
}


//in ES6 you can default exports or named exports(in VideoList.js)
export default SearchBar;