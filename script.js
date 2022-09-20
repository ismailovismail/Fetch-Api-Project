fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
        let infodata = data.map((a, index) => `${index}. ${a.name.common}`)
        for (let index in infodata) {
            const element = document.createElement('td')
            element.innerHTML = infodata[index]
            document.querySelector('tbody tr').appendChild(element)
            document.querySelector('tbody tr').style.display = 'flex'
            document.querySelector('tbody tr').style.flexDirection = 'column'
        }




        document.querySelector('tbody').style.display = 'flex'
        let official = data.map((b, index) => `${index}. ${b.name.official}`)
        for (let index in official) {
            const tdelement = document.createElement('td')
            tdelement.innerHTML = official[index]
            const body = document.querySelector('tbody').children[1]
            body.appendChild(tdelement)
            document.querySelector('tbody').children[1].style.display = 'flex'
            document.querySelector('tbody').children[1].style.flexDirection = 'column'
        }

        let capitals = data.map((c, index) => `${index}. ${c.capital}`)

        for (let index in capitals) {
            const tdelement2 = document.createElement('td')
            tdelement2.innerHTML = capitals[index]
            const tbodytr = document.querySelector('tbody').children[2]
            tbodytr.appendChild(tdelement2)
            document.querySelector('tbody').children[2].style.display = 'flex'
            document.querySelector('tbody').children[2].style.flexDirection = 'column'
        }


        let datainfo = data.map((d, index) => `${index}. ${d.flag}`)
        for (let index in datainfo) {

            const tdelement = document.createElement('td')
            tdelement.innerHTML = datainfo[index]
            const trelement = document.querySelector('tbody').children[3]
            trelement.appendChild(tdelement)
            document.querySelector('tbody').children[3].style.display = 'flex'
            document.querySelector('tbody').children[3].style.flexDirection = 'column'
        }
        let populationinfo = data.map((e, index) => `${index}. ${e.population}`)
        for (let index in populationinfo) {
            const tdelement = document.createElement('td')
            tdelement.innerHTML = populationinfo[index]
            document.querySelector('tbody').children[4].appendChild(tdelement)
            document.querySelector('tbody').children[4].style.display = 'flex'
            document.querySelector('tbody').children[4].style.flexDirection = 'column'

        }

         

        const tdelement = document.querySelectorAll('tbody tr:nth-child(1) td')
        const tdelement2 = document.querySelectorAll('tbody tr:nth-child(2) td')
        const tdelement3 = document.querySelectorAll('tbody tr:nth-child(3) td')
        const tdelement4 = document.querySelectorAll('tbody tr:nth-child(4) td')
        const tdelement5 = document.querySelectorAll('tbody tr:nth-child(5) td')

        const colorBtn=document.querySelector('.color-btn')
        colorBtn.onclick=()=>{
            const red=Math.floor(Math.random()*255)
            const green=Math.floor(Math.random()*255)
            const blue=Math.floor(Math.random()*255)
            const color=`rgb(${red},${green},${blue})`
            document.body.style.background=color
        }
        const btnPart = document.querySelector('.btn-part')
        btnPart.onclick = () => {
            btnPart.classList.add('active')
            btnPart1.classList.remove('active')
            btnPart2.classList.remove('active')
            btnPart3.classList.remove('active')
            btnPart4.classList.remove('active')
            btnPart5.classList.remove('active')

            for (let index = 0; index <= 250; index++) {
                tdelement[index].style.display = 'block'
                tdelement2[index].style.display = 'block'
                tdelement3[index].style.display = 'block'
                tdelement4[index].style.display = 'block'
                tdelement5[index].style.display = 'block'

            }
        }

        const btnPart1 = document.querySelector('.btn-part1')



        btnPart1.onclick = () => {
            btnPart.classList.remove('active')
            btnPart1.classList.add('active')
            btnPart2.classList.remove('active')
            btnPart3.classList.remove('active')
            btnPart4.classList.remove('active')
            btnPart5.classList.remove('active')

            for (let index in tdelement) {
                if (index >= 51 && index <= 250) {
                    tdelement[index].style.display = 'none'
                    tdelement2[index].style.display = 'none'
                    tdelement3[index].style.display = 'none'
                    tdelement4[index].style.display = 'none'
                    tdelement5[index].style.display = 'none'
                }


            }
            for (let index = 0; index <= 50; index++) {
                tdelement[index].style.display = 'block'
                tdelement2[index].style.display = 'block'
                tdelement3[index].style.display = 'block'
                tdelement4[index].style.display = 'block'
                tdelement5[index].style.display = 'block'

            }









        }


        const btnPart2 = document.querySelector('.btn-part2')

        btnPart2.onclick = () => {

            btnPart.classList.remove('active')
            btnPart1.classList.remove('active')
            btnPart2.classList.add('active')
            btnPart3.classList.remove('active')
            btnPart4.classList.remove('active')
            btnPart5.classList.remove('active')

            for (let index = 0; index <= 49; index++) {
                tdelement[index].style.display = 'none'
                tdelement2[index].style.display = 'none'
                tdelement3[index].style.display = 'none'
                tdelement4[index].style.display = 'none'
                tdelement5[index].style.display = 'none'
            }
            for (let index = 50; index <= 100; index++) {
                tdelement[index].style.display = 'block'
                tdelement2[index].style.display = 'block'
                tdelement3[index].style.display = 'block'
                tdelement4[index].style.display = 'block'
                tdelement5[index].style.display = 'block'

            }




            for (let index = 101; index <= 250; index++) {
                tdelement[index].style.display = 'none'
                tdelement2[index].style.display = 'none'
                tdelement3[index].style.display = 'none'
                tdelement4[index].style.display = 'none'
                tdelement5[index].style.display = 'none'

            }










        }
        const btnPart3 = document.querySelector('.btn-part3')

        btnPart3.onclick = () => {
            btnPart.classList.remove('active')
            btnPart1.classList.remove('active')
            btnPart2.classList.remove('active')
            btnPart3.classList.add('active')
            btnPart4.classList.remove('active')
            btnPart5.classList.remove('active')

            for (let index = 100; index <= 150; index++) {
                tdelement[index].style.display = 'block'
                tdelement2[index].style.display = 'block'
                tdelement3[index].style.display = 'block'
                tdelement4[index].style.display = 'block'
                tdelement5[index].style.display = 'block'
            }
            for (let index = 0; index <= 99; index++) {
                tdelement[index].style.display = 'none'
                tdelement2[index].style.display = 'none'
                tdelement3[index].style.display = 'none'
                tdelement4[index].style.display = 'none'
                tdelement5[index].style.display = 'none'
            }
            for (let index = 151; index <= 250; index++) {
                tdelement[index].style.display = 'none'
                tdelement2[index].style.display = 'none'
                tdelement3[index].style.display = 'none'
                tdelement4[index].style.display = 'none'
                tdelement5[index].style.display = 'none'
            }




        }

        const btnPart4 = document.querySelector('.btn-part4')

        btnPart4.onclick = () => {
            btnPart.classList.remove('active')
            btnPart1.classList.remove('active')
            btnPart2.classList.remove('active')
            btnPart3.classList.remove('active')
            btnPart4.classList.add('active')
            btnPart5.classList.remove('active')


            for (let index = 150; index <= 200; index++) {
                tdelement[index].style.display = 'block'
                tdelement2[index].style.display = 'block'
                tdelement3[index].style.display = 'block'
                tdelement4[index].style.display = 'block'
                tdelement5[index].style.display = 'block'

            }

            for (let index = 0; index <= 149; index++) {
                tdelement[index].style.display = 'none'
                tdelement2[index].style.display = 'none'
                tdelement3[index].style.display = 'none'
                tdelement4[index].style.display = 'none'
                tdelement5[index].style.display = 'none'

            }
            for (let index = 201; index <= 250; index++) {
                tdelement[index].style.display = 'none'
                tdelement2[index].style.display = 'none'
                tdelement3[index].style.display = 'none'
                tdelement4[index].style.display = 'none'
                tdelement5[index].style.display = 'none'

            }




        }

        const btnPart5 = document.querySelector('.btn-part5')

        btnPart5.onclick = () => {
            btnPart.classList.remove('active')
            btnPart1.classList.remove('active')
            btnPart2.classList.remove('active')
            btnPart3.classList.remove('active')
            btnPart4.classList.remove('active')
            btnPart5.classList.add('active')


            for (let index = 0; index <= 199; index++) {
                tdelement[index].style.display = 'none'
                tdelement2[index].style.display = 'none'
                tdelement3[index].style.display = 'none'
                tdelement4[index].style.display = 'none'
                tdelement5[index].style.display = 'none'
            }


            for (let index = 200; index <= 250; index++) {
                tdelement[index].style.display = 'block'
                tdelement2[index].style.display = 'block'
                tdelement3[index].style.display = 'block'
                tdelement4[index].style.display = 'block'
                tdelement5[index].style.display = 'block'
            }

         




        }



    })

    


