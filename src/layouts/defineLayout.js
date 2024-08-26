import DefaltLayout from "./DefaltLayout.vue"
import HomeLayout from "./HomeLayout.vue"
import SignLayout from "./SignLayout.vue"


const layouts = {  
    home :  HomeLayout,
    sign :  SignLayout,
    default : DefaltLayout
}

const regex = /^(.*?)-layout$/
export default function defineLayout(layoutName) { 
  let layoutsName = Object.keys(layouts).map( layout => {
    return `${layout}-layout`
  } )

  if(!layoutsName.includes(layoutName)) { 
     return DefaltLayout
  }

  const match = layoutName.match(regex);
  return layouts[match[1]]
  
}
