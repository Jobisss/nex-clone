import { defineStore } from "pinia";

export const useCategory = defineStore('myCategories', {
  state : () => ({ 
    categories : [
      { title: "Confêrencia",
        href : "/category-conferencias"
       },
      { title: "Workshop",
        href : "/category-workshops"
      },
      { title: "Seminário",
        href : "/category-seminarios"
       },
      { title: "Reunião de negócios",
        href : "/category-reuniaodenegocios"
       },
      { title: "Lançamento de produtos",
        href : "/category-lançamentosdeprodutos"
       },
      { title: "Treinamento",
        href: "/category-treinamentos"
       },
      { title: "Networking",
        href: "/category-networking"
       },
      { title: "Webinar",
        href: "/category-webinars"
       },
      { title: "Todos",
        href: "/category-all"
       },
    ]
  })
  
})