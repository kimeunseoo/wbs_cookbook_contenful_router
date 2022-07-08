import { NavLink, Outlet } from "react-router-dom";

const HS_container = ({foodHS}) => {


  return (
      <div style={{display: "flex"}}>
          <nav style={{
            padding: "1rem",
            marginTop: "3rem"
          }}>

          {foodHS.filter(item => item.fields.type==="hs")
          .map(item => 
            <NavLink
            style={({isActive}) =>{
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive?"orange":""
              }}
              }
              to={`/hauptspeise/${item.fields.name}`}
              key={item.sys.id}
            >
              {item.fields.name}
            </NavLink>
          )}

          </nav>
          <Outlet />
        </div>
  )
}
      

export default HS_container;
