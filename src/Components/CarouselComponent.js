import React, {Component} from "react"
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Lightbox from "react-images";


const styles = {
    carsize: {
        marginTop: 25,
        textAlign: "center"

    }
}

class CarouselComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            visible: false,
            currImg: 0,

        }
    }



    closeLightBox = () => {
        this.setState({
            visible: !this.state.visible
        });
    }

    nextImg = () => {
        this.setState({currImg: this.state.currImg+1})

    }

    prevImg = () => {
        this.setState({currImg: this.state.currImg-1})

    }

    openPreview = (i,e) => {
        e.preventDefault();
        this.setState({visible: !this.state.visible, currImg: i})
    }

    render() {
        let images = []


        this.props.images.map((e) => {
            images.push({src: e})
        });


        return (
            <div style={styles.carsize}>

                <Lightbox backdropClosesModal={true} currentImage={this.state.currImg} isOpen={this.state.visible} onClose={this.closeLightBox} images={images} onClickNext={(e) => this.nextImg()} onClickPrev={(e) => this.prevImg()}/>

                <CarouselProvider
                    naturalSlideWidth={500}
                    naturalSlideHeight={500}
                    totalSlides={this.props.images.length}
                >
                    <Slider>
                        {
                            this.props.images.map((img, i) => {
                                return (<Slide index={i}>
                                    <img src={img} style={{maxWidth: "100%", height: "100%"}} onClick={ (e) => this.openPreview(i,e)}/>
                                </Slide>)
                            })
                        }
                    </Slider>

                    <ButtonBack style={{border: "none", alignItems: "center"}} className="glyphicon glyphicon-chevron-left"/>
                    <ButtonNext style={{border: "none", alignItems: "center"}} className="glyphicon glyphicon-chevron-right"/>
                </CarouselProvider>
            </div>

        );
    }
}

export default CarouselComponent;