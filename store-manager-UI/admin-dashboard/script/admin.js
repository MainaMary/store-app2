const menuBtn = document.querySelector('.harmburger');
const sideNav = document.querySelector('.side-nav');
const wrapper = document.querySelector('.content-wrapper');
const title= document.querySelector('.tooltip');
menuBtn.addEventListener('click', () => {
    sideNav.classList.toggle('active');
    sideNav.classList.toggle('navLinks-active')
    
    wrapper.classList.toggle('active-wrapper')
})

// Modal
const modal = document.querySelector('.modal');
const closeModal= document.querySelector('.close-modal');
const admin = document.querySelector('.admin-profile');

admin.addEventListener('click',()=>{
    modal.classList.toggle('open')

})
closeModal.addEventListener('click',()=>{
    modal.classList.remove('open')
<<<<<<< HEAD
})
//Chart JS
const stockPop= document.getElementById('bar');
const salesPop= document.getElementById('pie');

const bar = new Chart(stockPop, {
    type: 'bar',
    data: {
        labels: ['Accessories','clothes','shoes'],
        datasets: [{
            label: 'stock',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgb(0, 128, 0)',
                'rgb(255, 255, 0)',
                'rgb(5, 0, 72)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
               
            ],
            borderWidth: 1
        }]
    },
})
const pie = new Chart(salesPop, {
    type: 'pie',
    data : {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: [
                'rgb(0, 128, 0)',
                'rgb(255, 255, 0)',
                'rgb(5, 0, 72)',
                
            ],
            borderColor: 'transparent'
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'shoes',
            'clothes',
            'accessories'
        ]
    }
    

})
=======
})
>>>>>>> ft/login-page
