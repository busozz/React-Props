import PropTypes from "prop-types"



// function User (props) {
//     return(
//         <h1>
//             {props.isLoggedIn ? `benim adım ${props.name} soyadım ${props.surname}`: "Giriş Yapılamadı" }
//         </h1>
//     )
// }


// Tek tek props. yazmak yerine bu şekilde kullanabiliriz.

function User ({name,surname,isLoggedIn,friends,location}) {

    if(!isLoggedIn){
        return "Giriş Yapılamadı"           
    }

    return(
        <>
        <h1>
            {isLoggedIn ? `benim adım ${name} soyadım ${surname}`: "Giriş Yapılamadı" }
        </h1>

        <h2>{friends &&  // && işlemi ilk fonksiyon varsa veya true ise sonraki işlemi yap yoksa yapma."?" işleme benziyor
            friends.map((x) => (
                <div key = {x.id}>{x.name}</div>
                ))
            }
        </h2>

            {location.address} {location.zip}
        
        </>
    )
}



User.propTypes = {                  // Properties Tiplerini belirtiyoruz.
    name : PropTypes.string.isRequired, // Buranın zorunlu kullnım olduğunu belirtmek için isRequired kullanırız
    surname : PropTypes.oneOfType([PropTypes.string,PropTypes.number]),   // Birden fazla özellik olabilir demek için.
    isLoggedIn : PropTypes.bool,
    friends: PropTypes.array,
    location: PropTypes.shape(
        {
            address:PropTypes.string,
            zip:PropTypes.number
        }
    )
}


User.defaultProps = {
    name: "İsimsiz",
    isLoggedIn : false
}













export default User