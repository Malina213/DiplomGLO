import { calcConst } from './modules/calcCost'
import { modal } from './modules/modal'
import { regularForm } from './modules/regularForm'
import { scroll } from './modules/smoothScroll'
import { swiperBenefits,swiperServices } from './modules/swiper'
import { timer } from './modules/timer'

modal()
swiperBenefits()
swiperServices()
timer('3 october 2025')
regularForm()
scroll()
calcConst()