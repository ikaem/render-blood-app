# rendering pages 
## about page 
### options 
- static page - !! this 

## home page
- has map 
- has list of cities with blood statuses 
- no images 
- potentually little seo content in form of data information about cities blood requirements 

### options 
- client side rendering completely after getting data 
  - would need to expose request and received data in the browser?
- ssr
  - get data on server - no exposing of request and received data on browser 
  - some contribution to SEO still 
  - a bit more lag until data for blood status is fetched every time 
- ssg -- !! This
  - get data when built with get static props  
  - potentially good SEO contribution 
  - can use isr to revalidate every 24 of 12 hours (this is how often web is scraped for new data anyhow)
  - filtering of data can be done on the state already in the app, not by requesting data from server every time 

### what is that map showing 

## subscribe page 
- will potentually have some kind of authentication in future - check if user is logged in, and possibly offer an option to quickly login 
- will need to return subscription status of logged in user 

NOTE: all bebnefits here are related to future auth functionality 
### options 
- ssr
  - probably best in terms of security 
  - get user 
  - get users subscription status 
  - longer load 





# fetching data 
## data 
- Just a fake database for now 
TODO - get access to 


# questions 
1. what is that map showing?
- locations of places to donate blod in the city?

... TODO 
1. create folder structure for getting data 

... NEXT 
2. SETUP JSON SERVER REPO FOR BLOOD SUPPLIES  
3. CREATE PROVIDER, SERVICE, MODELS, CONTROLLERS, STATE FOR BLOOD SUPPLIES
4. create home page 
- use ssg with regeneration every 24 hours 
- call service from get static props 
- type get staic props, so can infer types in component props
5. use ssr for subscribe page 
- for avoiding potentual issues with future auth
- create feature for subscribe 
- ui service there would be a hook again, to subscribe - same shape as that hook with state in blood supplies