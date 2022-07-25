import React from 'react'
import styled from 'styled-components'
import Section from "./Section"

export default function Home() {
  return (
    <Container>
        <Section
          title = "Model S"
          description = "Order Online for Touchless Delivery"
          backgroundImg ='/images/model-s.jpg'
          leftBtnText = "Custom Order"
          rightBtnText= "Exesting Inventory"
         />
        <Section
          title = "Model Y"
          description = "Order Online for Touchless Delivery"
          backgroundImg ='/images/model-y.jpg'
          leftBtnText = "Custom Order"
          rightBtnText= "Exesting Inventory"
         />
        <Section
          title = "Model 3"
          description = "Order Online for Touchless Delivery"
          backgroundImg ='/images/model-3.jpg'
          leftBtnText = "Custom Order"
          rightBtnText= "Exesting Inventory"
         />
        <Section
          title = "Model X"
          description = "Order Online for Touchless Delivery"
          backgroundImg ='/images/model-x.jpg'
          leftBtnText = "Custom Order"
          rightBtnText= "Exesting Inventory"
         />
        <Section
          title = "Lowest Cost Solar Panels in America"
          description = "Mony-back guarantee"
          backgroundImg ='/images/solar-panel.jpg'
          leftBtnText = "Custom Order"
          rightBtnText= "Exesting Inventory"
         />

        <Section
          title = "Solar for New Roofs"
          description = "Solar Roof Costs Less Than a New Roof"
          backgroundImg ='/images/solar-roof.jpg'
          leftBtnText = "Order Now"
          rightBtnText= "Learn more"
         />
                 <Section
          title = "Accessories"
          description = ""
          backgroundImg ='/images/accessories.jpg'
          leftBtnText = "Shop now"
         />

        {/* <Section />
        <Section /> */}
    </Container  >
  )
}

const Container = styled.div `
    height:100vh;
    
`