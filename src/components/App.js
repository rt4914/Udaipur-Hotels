import React from 'react';
import Footer from './Footer.js';
import Hero from './Hero.js'
import Navbar from './Navbar.js'
import WeddingBanner from './WeddingBanner.js';
import PropertyPage from './PropertyPage.js';
import PartneredPropertyCard from './PartneredPropertyCard.js';
import data from '../hotels-data'

export default class App extends React.Component{
  
  constructor() {
    super();
    this.state = {
      showHomePage: true,
      id: 1,
    };
  }

  createPropertyPageById = (id) => {
    const item = data.find(item => {
        if(item.id == id) {
          return item
        }
      }
    )

    if(item != null){
      return(
        <PropertyPage 
          key={item.id}
          id={item.id}
          coverImage={item.coverImg}
          otherImages={item.otherImages}
          rating={item.stats.rating}
          reviewCount={item.stats.reviewCount}
          location={item.location}
          name={item.name}
          description={item.description}
          minimumPrice={item.price.minimum}
          maximumPrice={item.price.maximum}
          amenities={item.amenities}
          checkInTime={item.check_in_time}
          checkOutTime={item.check_out_time}
          rules={item.rules}
        />
      )
    }
    else{
      this.setState({
        showHomePage: true
      })
    }
  }

  createPartneredPropertyList = () => {
    const partneredPropertyCardList = data.map(item => {
      return (
          <PartneredPropertyCard 
              key={item.id}
              id={item.id}
              coverImage={item.coverImg}
              rating={item.stats.rating}
              reviewCount={item.stats.reviewCount}
              location={item.location}
              name={item.name}
              description={item.description}
              minimumPrice={item.price.minimum}
              maximumPrice={item.price.maximum}
              onPartneredPropertyCardClick={this.onPartneredPropertyCardClick}
          />
      )
    })
    return partneredPropertyCardList;
  }

  render(){
    const partneredPropertyCardList = this.createPartneredPropertyList()
    let renderPage;

    if (this.state.showHomePage){
      renderPage = (
        <main>
          <Hero />
          <div className="partnered-property-list--container">
            <h2>Partnered Hotels</h2>
            <section className="cards-list">
                {partneredPropertyCardList}
            </section>
          </div>
          <WeddingBanner />
        </main>
      )
    }
    else{
      renderPage = (
        this.createPropertyPageById(this.state.id)
      )
    }

    return(
      <div className="App">
      <Navbar />
      {renderPage}
      <Footer />
    </div>
    )
  }

  onPartneredPropertyCardClick = (id) => {
    this.setState({
      showHomePage: false,
      id: id
    })
  }
}
