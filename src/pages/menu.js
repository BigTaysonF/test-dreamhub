const menus = [
    {
        id: 1,
        name: 'Home',
        links: '/',
    },
    {
        id: 2,
        name: 'Explore',
        links: '/explore-04',
        namesub: [
            {
                id: 1,
                sub: 'Explore page',
                links: '/explore-04'
            },
            {
                id: 2,
                sub: 'Live Auctions',
                links: '/live-auctions'
            },
            {
                id: 3,
                sub: 'Item Details',
                links: '/item-details-02'
            }
            
        ],
    },{
        id: 3,
        name: 'Activity',
        links: '/activity-01',
    },
    {
        id: 4,
        name: 'Community',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'Blog',
                links: '/blog'
            },
            {
                id: 2,
                sub: 'Blog Details',
                links: '/blog-details'
            },
            {
                id: 3,
                sub: 'Help Center',
                links: '/help-center'
            }
        ],
    },
    {
        id: 5,
        name: 'Page',
        links: '#',
        namesub: [
            {
                id: 2,
                sub: 'Authors',
                links: '/authors-02'
            },
            {
                id: 3,
                sub: 'Wallet Connect',
                links: '/wallet-connect'
            },
            {
                id: 4,
                sub: 'Create Item',
                links: '/create-item'
            },
            {
                id: 5,
                sub: 'Edit Profile',
                links: '/edit-profile'
            },
            {
                id: 6,
                sub: 'Ranking',
                links: '/ranking'
            },
            {
                id: 7,
                sub: 'Login',
                links: '/login'
            },
            {
                id: 8,
                sub: 'Sign Up',
                links: '/sign-up'
            },
            {
                id: 9,
                sub: 'No Result',
                links: '/no-result'
            },
            {
                id: 10,
                sub: 'FAQ',
                links: '/faq'
            }
        ],
    },
    {
        id: 7,
        name: 'Contact',
        links: '/contact-01',
    },
    
]

export default menus;