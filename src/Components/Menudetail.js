import React from 'react';



const styles = {
    preview: {
        width: 300,
        height: 200,
        display: 'inline-block',
        overflow: 'hidden'
    },
    control: {
        right: 0,
        left: 'auto',
    },
    inl: {
        display: 'inline-block',
        width: 300,
        height: 200,
        verticalAlign: 'top',
    },

}
class Menudetail extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div  style={styles.preview} id="myCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"/>
                            <li data-target="#myCarousel" data-slide-to="1"/>
                            <li data-target="#myCarousel" data-slide-to="2"/>
                        </ol>

                        <div className="carousel-inner" style={{display: 'inline-block'}}>
                            <div className="item active">
                                <img style={{verticalAlign: 'top'}} src={this.props.location.state.item.img[0]}/>
                            </div>
                            <div className="item">
                                <img src={this.props.location.state.item.img[1]}/>
                            </div>
                        </div>



                        <a className="carousel-control" href="#myCarousel" style={styles.controlBtn} data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"/>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control" style={styles.control}  href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"/>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <div style={styles.inl}>
                        <h3 style={{top: 0, left: 5} }>{this.props.location.state.item.art_name}</h3>
                        <p style={{marginBottom: 50, wordWrap: 'break-word'}}>{this.props.location.state.item.art_desc}</p>
                        <h3 style={{marginTop: 0, textAlign: 'left', marginLeft: 5}}>Preis: €{this.props.location.state.item.art_price}</h3>
                    </div>

                </div>
            </div>
        );
    }
}


export default Menudetail;