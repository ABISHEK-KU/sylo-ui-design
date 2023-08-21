import React from 'react'
import './style/Main.css'
import AutoSwiper from './AutoSwiper'
import Occasion from './Occasion'
import Venues from './Venues'
import Syloevents from './Syloevents'
import CustomerReel from './CustomerReel'
import BudgetVenues from './BudgetVenues'

export default function Main() {
  return (
    <section className='mainView'>
      <AutoSwiper/>
      <Occasion/>
      <Venues/>
      <Syloevents/>
      <CustomerReel/>
      <BudgetVenues/>
    </section>
  )
}
