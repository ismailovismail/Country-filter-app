import React, { Component } from 'react'

class Search extends Component {
    constructor() {
        super()
        this.state = {
            keyword: '',


        }
    }
    changeKeyword = (e) => {
        this.setState({
            keyword: e.target.value
        })

    }
    searchSubmit = (e) => {
        e.preventDefault()
        this.props.searchValue(this.state.keyword)
        e.target.children[0].value = ''


    }


    render() {
        return (
            <>
                <form onSubmit={this.searchSubmit}>
                    <input onChange={this.changeKeyword} value={this.state.value} type="text" placeholder='Search' />
                    <button className='btn btn-primary'>Submit</button>
                </form>

            </>
        )
    }
}
export default Search