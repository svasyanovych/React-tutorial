import React, {Component, PureComponent} from 'react'


class Article extends PureComponent{
		constructor(props) {
        super(props)

        this.state = {
            
        }
    }


    componentWillMount(){
    	
    }

    componentWillUpdate(){
    	
    }

	render() {
		const {article, isOpen, onButtonClick} = this.props
		const body = isOpen && <section className="card-text">{article.text}</section>
		const style = {width: '70%'}
		return(
			<div className="card mx-auto" style ={style}>
			  <div className="card-header">
				<h2>
					{article.title}
					<button onClick={onButtonClick} className="btn btn-primary btn-lg float-right">
						{isOpen ? 'close' : 'open'}
					</button>
				</h2>
			  </div>
			  <div className="card-body">
				  <h6 className="card-subtitle text-muted">
				creation date: {(new Date(article.date)).toDateString()}
				  </h6>
				  {body}
			  </div>
			</div>
		)
	}

}

export default Article