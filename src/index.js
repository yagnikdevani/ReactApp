import React from 'react'
import ReactDom from 'react-dom'

// Define Var 
const Books = [
    {
        name:"Lalo",
        age:25,
        bookImg:"https://images-na.ssl-images-amazon.com/images/I/510M0zUbnxL._SX404_BO1,204,203,200_.jpg",
        description:"Hey Lalo it's working "
    },{
        name:"Yagnik",
        age:10,
        bookImg:"https://images-na.ssl-images-amazon.com/images/I/510M0zUbnxL._SX404_BO1,204,203,200_.jpg",
        description:"Hey Yagnik it's working "
    }];
const Book = () =>{
    return(
        <section>
            {Books.map((book) =>{
                const {name,bookImg,description,age} = book;
                return (
                    <div>
                        <AuthorName name={name} age={age}/>
                        <BookImage src={bookImg}/>
                        <TextContain description={description}/> 
                    </div>
                );
            })}
        </section>
    );
}

const AuthorName = (props) => {
    const {name,age} = props;
    return (
        <div>
            <h1>{name} </h1>
            <h1>{age} </h1>
        </div>
    );
}

const TextContain = ({description}) =>{
    return (
        <p>{description}</p>
    )
}

const BookImage = ({src}) =>{
    return (
        <img src={src} alt=""/>
    )
}


ReactDom.render(<Book/>,document.getElementById('root'))
