import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const { location } = this.props;
        if(location.state) {
            return (
                <div className="movie_detail_data">  
                    <img src={location.state.poster}/>
                    <h3 className="movie_detail_title">{location.state.title}</h3>
                    <span className="movie_detail_year">{location.state.year}</span>
                </div>
            )
        }else {
            return null;
        }
    }
}

export default Detail;