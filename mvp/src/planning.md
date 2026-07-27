# App Description

Build a responsive frontend for an MVP seller dashboard designed to help businesses manage orders and eliminate "DM-Chaos".

# Tech Stack

**Framework:** Vite + React

**Language:** JavaScript

**Styling:** Standard CSS

**Icons:** Lucide React 

# File Structure

src/
├─ components/    -----------------------> Reusable components of small structuring elements
│  ├─ Input.jsx   -----------------------> Takes user input and has a label
│  ├─ ActionButton.jsx ------------------> Big action buttons found at the bottom of the page
│  ├─ Checkbox.jsx ----------------------> A checkbox accompanied by text
│  ├─ Toggle.jsx ------------------------> A toggle accompanied by toggle
│  ├─ VerticalCard.jsx ------------------> A vertical card with image, takes up to three text inputs
│  ├─ HorizontalCardRight.jsx -----------> A horizontal card with an image on the right, main text, secondary text, and an optional badge
│  ├─ HorizontalCardLeft.jsx ------------> A horizontal card with an image on the left, main text, secondary text, and an optional badge
│  ├─ SectionWithCards.jsx  -------------> A Section that contains a title, VerticalCards, and a View All button
│  ├─ SearchBar.jsx ---------------------> A Search Bar
│  ├─ BackButton.jsx --------------------> A button that contains a left arrow and the descriptive "Back"
│  ├─ Image.jsx -------------------------> An image container in square, changes size depending on the parent
│  ├─ Dropdown.jsx ----------------------> A dropdown that changes size depending on the parent and accepts variable inputs for options as props
│  ├─ DetailsLine.jsx -------------------> Short text that is divided by bullets and is contained in one single line. Its size and font size depends on props and the parent
│  ├─ BuyerInfo.jsx ---------------------> Contains a main text with the buyer's name, and secondary text with the buyer's phone number and email address.
│  ├─ Badges.jsx ------------------------> Badges that accept an icon and text. Change color and size depending on the props and the parent.
│  ├─ HeaderText.jsx --------------------> Main text or title
│  ├─ EditButton.jsx --------------------> Button with "Edit" descriptive.
│  ├─ CustomizationDetail.jsx -----------> Section that displays a main title, followed by a divider, horizontal cards, and a mandatory badge.
│  ├─ ImageCarousel.jsx -----------------> Displays images in a carousel. Its size depends on the parent and accepts any number of images. 
│  ├─ ModifierButton.jsx ----------------> A circle button with an icon inside. Its color can vary.
│  ├─ NavBar.jsx ------------------------> A navigation bar with three buttons
│  ├─ CategoryDetail.jsx ----------------> Displays a category followed by the selected option.
│  ├─ ImageUploader.jsx -----------------> Square with dashed border than calls to upload an image
│  ├─ CustomizationDetail.jsx -----------> Displays the title of a customization category, a badge to indicate if it's required, and one or multile HorizontalCardRight withe the option(s) for the customization.
│  ├─ CustomizationInputGroup.jsx -------> Asks for the input of the name of the customization category, the options, the prices of the options, the image of the option, and if the customization category is required or not.
│  ├─ Toast.jsx -------------------------> Shows and disappears with a small informing message
│  ├─ StoreWelcomeBanner.jsx ------------> Displays a Welcome message with the name and logo of the store.
│  ├─ CartProduct.jsx -------------------> Displays an image of the product, its name, base price, customizations chosen, modifier price of the customizations, a dropdown to choose the amount of products, delete button, and edit.
│  ├─ CartBuyerInfo.jsx ---------------------> Form that takes the name, whatsapp number, email, and delivery address of the buyer.
│  ├─ CartButton.jsx   ------------------> Cart Button that is fixed on the top right of the page.
│  │
│  ├─ pages/       -----------------------> Components that structure one whole page.
│  │  ├─ HorizontalListPage.jsx ----------> Contains a main header, a search bar, badges that serve for filtering and sorting, followed by optional HorizontalCardLeft (none, one, or multiple)
│  │  ├─ CardListPage.jsx ----------------> Contains a main header, a search bar, and a grid of optional VerticalCard (none, one, or multiple)
│  │  ├─ ListingDetailPage.jsx -----------> Contains a main header, an Edit button, an image carousel, text, and a CustomizationDetail
│  │  ├─ OrderDetailPage.jsx -------------> Contains a main header, title, a divider, a DetailsLine, a dropdown, BuyerInfo, and horizontal left cards.
│  │  ├─ ProductOrderedDetailPage.jsx ----> Contains a main header and an Image with Title, Secondary text, and multiple CategoryDetail
│  │  ├─ ModifyListingPage.jsx -----------> Contains an ImageUploader, multiple Input, multiple dynamic CustomizationInputGroup and an ActionButton
│  │  ├─ StoreFrontPage.jsx --------------> Contains a StoreWelcomeBanner and a CardListPage.
│  │  ├─ ProductPage.jsx -----------------> Contains an ImageCarousel, multiple Input, and an ActionButton
│  │  ├─ CartPage.jsx --------------------> Contains multiple CartProduct, an ActionButton, and a Buyer Info as a modal.
│  │
├─ links/
│  ├─ Login.jsx --------------------------> Asks for email and password to login to account
│  ├─ CreateSeller.jsx -------------------> Asks for name, email, phone number, and password to create a seller account
│  ├─ CreateStore.jsx --------------------> Asks for store name, slug, email, phone number, instagram, store address, store description, and custom message to create a store
│  ├─ CreateListing.jsx ------------------> Asks for images, product name, product base price, customizations, options for each customizations, added price for each option, the amount available for the product and delivery availability
│  ├─ Home.jsx
│  ├─ AllOrders.jsx ----------------------> Displays All Orders in a HorizontalListPage.
│  ├─ NewOrders.jsx ------------------> Displays Pending Orders in a HorizontalListPage.
│  ├─ OrderDetail.jsx --------------------> Displays Order Details in a OrderDetailPage.
│  ├─ ProductOrderedDetail.jsx -----------> Displays the details of a product that has been ordered in a ProductOrderedDetailPage.
│  ├─ Listings.jsx -----------------------> Displays all listings in a CardListPage
│  ├─ ListingDetail.jsx ------------------> Displays details of a listing in a ListingDetailPage
│  ├─ OrderSummary.jsx -------------------> Displays and enables editing for a custom order message.
│  ├─ AccountSettings.jsx ----------------> Displays the seller account and store information.
│  ├─ ListingDetail.jsx ------------------> Displays for image(s), title, price, amount, delivery availability, customizations, their options, prices, and image(s), and requiredness to create a listing in a ModifyListingPage
│  ├─ CreateListing.jsx ------------------> Asks for image(s), title, price, amount, delivery availability, customizations, their options, prices, and image(s), and requiredness to create a listing in a ModifyListingPage
│  ├─ EditListing.jsx --------------------> Displays and asks for image(s), title, price, amount, delivery availability, customizations, their options, prices, and image(s), and requiredness to create a listing in a ModifyListingPage
│  ├─ StoreFront.jsx ---------------------> Displays a welcome banner and all the listings in a StoreFrontPage
│  ├─ Product.jsx ------------------------> Displays product images, name, price, delivery availability, customizations, asks for custom message and needed by date using a ProductPage.
│  ├─ Cart.jsx ---------------------------> Displays chosen products using a CartPage.
│  ├─ OrderSuccess.jsx -------------------> Displays a message when the order was made successfully.
│  │
├─ data/    -----------------------> Data used for the app
│  ├─ MockData.js   ---------------> Data in a json file, contains a MOCK_SELLER, MOCK_ORDERS, and MOCK_LISTINGS
│  │
├─ App.jsx -------------------------------> Serves as a router for all links
├─ App.css -------------------------------> Global styling


# Flow Structure

**Seller Side:**

                                           ┌──► NewOrders ────│                                                                     
                                           │                  └──┬─► OrderDetail ─────► ProductsOrdered ─────►  ProductOrderedDetail
 Login  ─┐                                 │                     │                                                                  
         └───────────────────────► Home ───┼──► AllOrders ───────┘                                                                  
                                   ▲ │     │                                                                                        
                                   │ │     │                                                                                        
Create Seller  ──► CreateStore ────┘ │     └──► Listings ──────────► ListingDetail ────► EditListing                                
                                     │                                                                                                       
                                     │                                                                                              
                                     ├───► CreateListing                                                                            
                                     │                                                                                              
                                     │                                                                                              
                                     └───► AccountSettings ───► EditAccountSettings                                                 
                                                

**Buyer Side:**                                                                                                                          
                                                                                                                                    
StoreFront ────► Product ───► Cart ────► OrderSuccess                                                                                        


# Style

**Primary Color:** Purple (use soft, modern shades like violet or indigo for accents, buttons, and focus states).

**Style:** Minimalistic, clean, and friendly. Avoid heavy borders or cluttered layouts. Use ample whitespace, soft rounded corners, and subtle shadows to create a welcoming interface.

**Accessibility:** The code must include semantic HTML, proper ARIA labels, clear focus states for keyboard navigation, and high-contrast text.

# Components built and their Props

**ActionButton.jsx**: 
text ----------------> text inside the button
onClick -------------> what to do when clicked
type = 'button'

**Checkbox.jsx**:  
id ------------------> id of the element
label ---------------> descriptive text for the functionality of the checkbox
checked -------------> action to complete when checked
onChange ------------> function to call for React to handle the change and rerender

**HeaderText.jsx**: 
text ----------------> title text for the header

**Input.jsx**: 
label ---------------> descriptive text for the input field
type = 'text' -------> type of th input field. Defaultsto 'text'
value ---------------> value of the input field
onChange ------------> function to call for React to handle the change and rerender
id ------------------> id of the input field
required = false ----> boolean that specifies if the input is required to have a value before submitting the form. Defaults to 'false'
prefix --------------> prefix of the input field. It is optional.
rows ----------------> the amount of rows that the input field will occupy. It is optional.
pattern ---------> the custom formatting that the input needs to have before submmitting the form. It is optional.
customErrorMessage --> the custom message that the input shows when it does not have the correct formatting when submmitting the form. It is optional.

**VerticalCard.jsx**: 
imageSrc ------------> image that the card presents
text1 ---------------> main text
text2 ---------------> secondary text
text3 ---------------> supporting text
onClick -------------> what to do when clicked

**SectionWithCards.jsx**
title ---------------> title of the section
viewAllRoute --------> route that the section will go to when clicked the link
cards ---------------> data of the cards that the section will display as json

**NavBar.jsx**
does not take props

**Image.jsx**
src -----------------> source of the image
alt -----------------> alternative text for the image

**SearchBar.jsx**
placeholder = "Search" --> placeholder text for the search bar
value ---------------> the value of what is inside of the input
onChange ------------> function to call for React to handle the change and rerender

**Badge.jsx**
text ----------------> descriptive text inside the badge
active --------------> boolean indicating if the badge is currently active
onClick -------------> what to do when clicked
type = "filter" -----> indicates the type of badge. Defaulst to 'filter'

**HorizontalCardLeft.jsx**
imageSrc ------------> image that the card presents
imageNotifCount -----> the number in the bubble of notification
title ---------------> main text of the card
subtitle ------------> secondary text of the card
status --------------> status of the product presented in a badge. It is optional.

**HorizontalListPage.jsx**
title ---------------> the title of the page
filters -------------> the filters for the list (as an array)
data ----------------> the data to be displayed in the cards (as a json)

**DetailsLine.jsx**
items = [] ----------> takes a list of all the props that you want displayed in the line

**Dropdown.jsx**
value ---------------> value selected for the dropdown
options -------------> options available for the dropdown
onChange ------------> function to call for React to handle the change and rerender

**OrderDetailPage.jsx**
status --------------> status of the order (Pending, Completed, In Progress)
dateAction ----------> date the order was completed or is supposed to be sent by in YYYY-MM-DD format
dateOrdered ---------> date the order was made
total ---------------> total price of the order
buyer ---------------> buyer information (name, phone number, address)
products ------------> list of products and their information (id, name, price, image, customizations)
onStatusChange ------> function to call for React to handle the change and rerender

**CategoryDetail.jsx**
category ------------> label of the customization category
option --------------> option chosen for the customization
price ---------------> price of the customization
showDivider ---------> choose to show a divider or not between categories 

**ProductOrderedDetailPage.jsx**
product -------------> product to be displayed

**ImageCarousel.jsx**
images --------------> list of images to be displayed
containerClass = "carousel-container" ---------------------> class of the carousel
imgClass = "carousel-image" -------------------------------> class of the images


**CustomizationInputGroup.jsx**
customization -------> name of the customization
onChange ------------> function to call for React to handle the change and rerender
onDelete ------------> what to do when the customization is deleted

**ImageUploader.jsx**
onImageSelected ------> what to do when a picture is selected
image ----------------> image to show

**BackButton.jsx**
goTo -----------------> page to navigate to when the button is clicked

**HorizontalCardRight.jsx**
title ----------------> main text of the card
subtitle -------------> secondary text of the card. It is optional.
imageSrc -------------> image to display in the card. It is optional.


**CustomizationDetail.jsx**
title ----------------> title of the customization
isRequired -----------> boolean indicating if the customization is required
options --------------> options of the customization

**CardListPage.jsx**
title ----------------> title of the page
data -----------------> data to display in the cards
onItemClick ----------> what to do when a card is clicked
onBack = -1 ----------> page to navigate to when going back. It is optional.

**ListingDetailPage.jsx**
listing --------------> id of the listing to display
onEdit ---------------> page to navigate to when editing the listing
onBack ---------------> page to navigate to when going back

**EditButton.jsx**
onClick --------------> what to do when clicked

**VerticalCard.jsx**
imageSrc -------------> image that the card presents
text1 ----------------> main text of the card
text2 ----------------> secondary text of the card
text3 ----------------> tertiary text of the card
onClick --------------> what to do when clicked

**Toast.jsx**
message --------------> message to display
show -----------------> boolean indicating if the toast is to be shown or not


**StoreWelcomeBanner.jsx**

**StoreFrontPage.jsx**

**CartButton.jsx**

**ProductPage.jsx**

**CartProduct.jsx**

**CartBuyerInfo.jsx**

**CartPage.jsx**

**OrderSuccessPage.jsx**

# Links built

**Login.jsx**

**CreateSeller.jsx**

**CreateStore.jsx**

**Home.jsx**

**AllOrders.jsx**

**OrderDetail.jsx**

**ProductOrderedDetail.jsx**

**CreateListing.jsx**

**Listings.jsx**

**ListingDetail.jsx**

**AccountSettings.jsx**

**EditAccountSettings.jsx**

**StoreFront.jsx**

**Product.jsx**

**OrderSuccess.jsx**