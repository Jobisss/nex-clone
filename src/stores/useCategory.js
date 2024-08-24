import { defineStore } from "pinia";

export const useCategory = defineStore('myCategories', {
  state : () => ({ 
    categories : [
      { title: "Confêrencia",
        href : "conferencias"
       },
      { title: "Workshop",
        href : "workshops"
      },
      { title: "Seminário",
        href : "seminarios"
       },
      { title: "Reunião de negócios",
        href : "reuniaodenegocios"
       },
      { title: "Lançamento de produtos",
        href : "lançamentosdeprodutos"
       },
      { title: "Treinamento",
        href: "treinamentos"
       },
      { title: "Networking",
        href: "networking"
       },
      { title: "Webinar",
        href: "webinars"
       },
      { title: "Todos",
        href: "all"
       },
    ]
  })
  
})