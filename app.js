gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

	ScrollSmoother.create({
		smooth: 1.5,
		effects: true
	})


    gsap.fromTo('.title', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.title',
			start: 'center',
			end: '100',
			scrub: true
		}
	})

    gsap.fromTo('.earth', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.earth',
			start: 'center',
			end: '1020',
			scrub: true
		}
	})





	let mm = gsap.matchMedia();

	mm.add("(max-width: 768px)", () => {
		let itemsR = gsap.utils.toArray('.rocket')

		itemsR.forEach(item => {
			gsap.fromTo(item, { opacity: 0, x: 150 }, {
				opacity: 0.4, x: 0,
				scrollTrigger: {
					trigger: item,
					start: '-700',
					end: '-100',
					scrub: true
				}
			})
		})
	
	})

	mm.add("(min-width: 768px)", () => {
		let itemsR = gsap.utils.toArray('.rocket')

		itemsR.forEach(item => {
			gsap.fromTo(item, { opacity: 0, x: 150 }, {
				opacity: 1, x: 0,
				scrollTrigger: {
					trigger: item,
					start: '-700',
					end: '-100',
					scrub: true
				}
			})
		})
	
	})

	let itemsL = gsap.utils.toArray('.item-gsap')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-550',
				scrub: true
			}
		})
	})

	// let itemsR = gsap.utils.toArray('.rocket')

	// itemsR.forEach(item => {
	// 	gsap.fromTo(item, { opacity: 0, x: 150 }, {
	// 		opacity: 1, x: 0,
	// 		scrollTrigger: {
	// 			trigger: item,
	// 			start: '-700',
	// 			end: '-100',
	// 			scrub: true
	// 		}
	// 	})
	// })

	