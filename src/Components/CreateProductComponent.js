import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import ENV from "../api/env";
import * as axios from "axios";
import store from '../stores'


const styles = {
    uploader: {
        width: "100%",
        height: "70px",
        border: "solid",
        borderWidth: 1,
        marginBottom: 10,
        textAlign: 'center',
        backgroundColor: "#eee"
    },
    sel: {
        height: 30,
        width: "100%",
        border: "none",
        borderLeftStyle: "none",
        borderWidth: 0,
        borderBottomWidth: 3,
        borderRadius: 0,
        backgroundPosition: "right 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDZFNDEwNjlGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDZFNDEwNkFGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NkU0MTA2N0Y3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NkU0MTA2OEY3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuGsgwQAAAA5SURBVHjaYvz//z8DOYCJgUxAf42MQIzTk0D/M+KzkRGPoQSdykiKJrBGpOhgJFYTWNEIiEeAAAMAzNENEOH+do8AAAAASUVORK5CYII=)",
        WebkitAppearance: "none",
        padding: ".3em",
        paddingRight: "1.5em",
        marginBottom: 10
    }
}

class CreateProductComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [],
            cat: 'Sonstiges',
            name: '',
            desc: '',
            price: '',
        }
    }


    attachToArray = (value) => {
        let array = this.state.images;

        value.forEach(element => {
            array.push(element);
        })

        this.setState({
            images: array,
        });
    }

    handleName = (event) => {
        this.setState({ name: event.target.value })
    }
    handleDesc = (event) => {
        this.setState({ desc: event.target.value })

    }
    handlePrice = (event) => {
        this.setState({ price: event.target.value })

    }
    handleCat = (event) => {
        this.setState({ cat: event.target.value })
    }

    onCreate = () => {
        const url = ENV.host + '/main/add';

        let data = new FormData()
        this.state.images.forEach(item => {
            data.append('images', item, item['name']);
        });

        data.append('user', store.userStore.name.get());
        data.append('product', this.state.name);
        data.append('desc', this.state.desc);
        data.append('category', this.state.cat);
        data.append('price', this.state.price);

        return axios.post(url, data).then(res => {
            this.props.close()
            this.setState({
                product: "",
                desc: "",
                category: "",
                price: "",
                images: []
            })
            store.itemStore.reqItem();
        }).catch(e => console.log(e))

    }


    render() {
        return (
            <div style={{ width: "100%" }}>
                <Dropzone style={styles.uploader} accept="image/jpeg, image/png" onDrop={(accepted) => { this.attachToArray(accepted) }}>
                    <span style={{ marginTop: 15 }} className="glyphicon glyphicon-hdd" />
                    <p style={{ fontWeight: "bold", color: "grey" }}>Foto auswählen oder hier hineinziehen!</p>
                </Dropzone>
                <ul>
                    {this.state.images.map((it) => {
                        return <li key={it.name}>{it.name}-{it.size} bytes</li>
                    })}
                </ul>
                <form style={{ width: "40%" }}>
                    <div style={{ flex: 1 }}>
                        <input style={{ marginBottom: 10, borderRadius: 0 }} value={this.state.name} type="text" className="form-control" placeholder="Artikel Name" onChange={this.handleName} required={true} />
                        <textarea style={{ marginBottom: 10, borderRadius: 0 }} maxLength={400} rows="4" cols="50" value={this.state.desc} className="form-control" placeholder="Artikel Beschreibung" onChange={this.handleDesc} required={true} />
                        <select style={styles.sel} value={this.state.cat} onChange={this.handleCat} required={true}>
                            <option>Sonstiges</option>
                            <option>Nachhilfe</option>
                            <option>Bücher</option>
                        </select>
                        <input style={{ marginBottom: 10, borderRadius: 0 }} type="number" className="form-control" placeholder="Verkaufspreis" value={this.state.price} onChange={this.handlePrice} required={true} />
                    </div>
                    <div>
                        {
                            this.state.images.length === 0
                            ? <button disabled={true} type="button" className="btn btn-success btn-block" style={{ borderRadius: 0, height: 30 }}>Produkt erstellen</button>
                            : <button onClick={this.onCreate} type="button" className="btn btn-success btn-block" style={{ borderRadius: 0, height: 30 }}>Produkt erstellen</button>
                        }
                    </div>

                </form>
            </div>
        );
    }
}

export default CreateProductComponent;