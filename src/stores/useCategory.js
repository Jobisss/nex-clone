import { defineStore } from "pinia";

export const useCategory = defineStore('myCategories', {
  state : () => ({ 
    categories : [
      { title: "Confêrencias",
        href : "conferencias"
       },
      { title: "Workshops",
        href : "workshops"
      },
      { title: "Seminários",
        href : "seminarios"
       },
      { title: "Reuniões de negócios",
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