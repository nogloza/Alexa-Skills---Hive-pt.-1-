exports.handler = (event, context, callback) => {
  // TODO implement
  try {


    switch (event.request.type) {

      case "LaunchRequest":
        context.succeed(
          generateResponse(
            buildSpeechletResponse(`Welcome to Hive! Hive is a platform that streamlines lease, property, and tenant data by organizing and sharing commercial real-estate information. You can say something like, define proposed building, or, define planned project`, `What do you want to know?`, false), {}
          ))

        break;

      case "IntentRequest":
        switch (event.request.intent.name) {
          case "definitions":

            var readVal = event.request.intent.slots.terms.value
            console.log(readVal);
            console.log("we are at the top of the case statement")

            if ((readVal == "proposed") || (readVal == "proposed project") || (readVal == "planned project") || (readVal == "planned building") || (readVal == "planned") || (readVal == "proposed building")) {
              var result = "A building that has received zoning approval but has not yet started construction."

              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}
                )
              )
            }
            else if ((readVal == "under construction") || (readVal == "under construction project") || (readVal == "under construction building")) {
              var result = "A building is under construction when construction permits have been obtained and site excavation has begun. If a site is being redeveloped, demolition of existing structures does not necessarily indicate that construction has begun. Sites are sometimes cleared years in advance of a groundbreaking."

              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}
                )
              )
            }

            else if ((readVal == "under renovation") || (readVal == "under renovation building") || (readVal == "under renovation project")) {
              var result = "A building is typically under renovation when construction permits have been obtained and demolition has begun. A building is under renovation if it remains inhabitable by tenants during the construction. If an existing building is gutted extensively, then the building should be removed from inventory and redelivered when the occupancy permit is issued."

              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}
                )
              )
            }
            else if ((readVal == "delivered")) {
              var result = "A building that has completed construction (i.e. obtained its certificate of occupancy). With a COO, the property will be considered delivered whether or not tenants have occupied the space. (Synonyms: completion; new supply)"

              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}
                )
              )
            }
            else if ((readVal == "letter of intent")) {
              var result = "A letter of intent is an agreement(s) between two or more parties before an actual agreement, such as a lease, is finalized. It is similar to a term sheet or memorandum of understanding (MOU). While LOIs may not be binding, provisions of them can be, e.g., non-disclosure and exclusivity. The intent is to protect both parties in the transaction until the transaction is executed."

              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}
                )
              )
            }
            else if ((readVal == `building status definition`) || (readVal == `building status definitions`)) {
              var result = "which of the terms would you like me to define?, delivered, letter of intent, proposed or planned, under construction, under renovation"

              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}
                )
              )
            }


            else if ((readVal == "types of development and redevelopment projects")) {
              console.log("in types")
              var result = "which of the terms would you like me to define?, Adaptive Reuse, Build-to-suit, Conversion, Infill, Infill, renovation, retrofit, Speculative"

              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}
                )
              )
            }


            else if ((readVal == `adaptive reuse`)) {
              console.log("in adaptive reuse");
              var result = "A building converted to a different use in order to meet current demand. include a factory converted to retail use or an office building converted to a school. (Also see conversion)";
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}
                )
              )
            }

            else if ((readVal == `build to suit`)) {
              var result = "A building is designed and tailored for a specific tenant, often because the tenant is unable to find suitable space in the speculative market. Sometimes (but not always), a build-to-suit project includes specific design features not commonly found in the speculative market, thus compelling the tenant to have a special facility built. The build-to-suit project is usually contracted with a developer who owns and operates the completed facility occupied by the tenant. Generally, a build-to-suit project becomes a single-tenant building upon completion."

              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}
                )
              )
            }

            else if ((readVal == `conversion`)) {
              var result = "A building that is changed from one use to another (i.e., an office building that is converted to a multifamily building). Space being converted is removed from current inventory and included in the under constructioncategory for the planned future use (i.e., an office building being converted To an apartment building will be removed from office inventory and included under apartment space, or number of units, under construction). (Also see adaptive reuse)"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}
                )
              )
            }
            else if ((readVal == "infill")) {
              var result = "Infill is the development of one or more buildings on underutilized land situated between existing buildings. Infill development is typically done in dense environments where land is scarce. The slightly broader term “land-recycling” is sometimes used."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}
                )
              )
            }
            else if ((readVal == `redevelopment`)) {
              var result = "A building or site that involves teardown and rebuilding of most—if not all—structures on that site. This change typically occurs in sought-after areas that are usually well located, where buildings have become unattractive or obsolete or where there is a demand for different uses."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}
                )
              )
            }
            else if ((readVal == `renovation`)) {
              var result = "Upgrading and modernizing common areas in a building such as lobbies,bathrooms, parking areas, etc. The tenant remains in the building, and thebuilding use and square footage do not change. Renovation is often donetogether with a retrofit."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `retrofit`)) {
              var result = "Modernization of building systems such as heating, ventilation and airconditioning (HVAC); security; fire alarms; and energy management. Thetenant remains in the building, and the building use and square footage donot change. Retrofit is often done together with a renovation."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `speculative`)) {
              var result = "A building developed and constructed without any preleasing in place.Construction commences without a prelease when the developer believesthere is so much demand for that type of building in that market orsubmarket that a lease commitment is bound to come through."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }

           else if ((readVal == `location and site definitions`) || (readVal == 'location and site definition')) {
              var result = "which of the terms would you like me to define?, Air Rights, Brownfield, Exurban, Floor Area Ratio, Market and Submarket, Submarket, Suburban, Town Center,Transit-oriented Development, Transit Score, Urban, Walk Score"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
             else if ((readVal == `air rights`)) {
              var result = "A type of property interest referring to the “space” above land."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
             else if ((readVal == `brownfield`)) {
              var result = "Abandoned, idled, or underused land or facilities where expansion or redevelopment is complicated by real or perceived environmental contamination."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `exurban`)) {
              var result = "An emerging residential area beyond built-up suburbs and edge cities."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `floor area ratio`)) {
              var result = "FAR is the relationship between the total square footage of a building and the total square footage of the parcel on which the building is located. It is typically calculated by dividing the total square footage of the building by the land area in square feet. For example, if a 20,000-square-foot building is built on a 10,000-square-foot lot, the FAR is 2.0."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }

             else if ((readVal == `market and submarket`)) {
              var result = "In commercial real estate (CRE), the terms “market” and “submarket” have many characteristics. 1. Hierarchy: In terms of geographic hierarchy, a region is made up of markets, and a market is made up of submarkets. 2. Boundaries: Markets and submarkets have generally accepted geographic boundaries that do not overlap. They are most commonly bound by streets, roads and natural features such as parks and rivers, which clearly indicate where one market or submarket ends and another begins. 3. Purpose: Markets and submarkets are the foundation upon which analysts track real estate fundamentals such as vacancy, absorption, rents and construction activity. 4. Markets and submarkets are further broken down by total buildings and by total square footage in those buildings. 5. Product types: Office and industrial product types may share generally accepted market or submarket boundaries because in the United States, office space tends to be clustered together as does industrial space. However, there may also be separate and distinct boundaries for each respective property type. Suburban retail is more closely tied to residential and, therefore, is dispersed across large geographic areas, whereas urban retail is typically clustered in specific areas or on specific streets."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }

              else if ((readVal == `submarket`)) {
              var result = "Submarkets are geographic divisions of markets. These smaller divisions or boundaries are generally recognized and accepted by the real estate industry and the business community in a market and region. Submarkets are geographic boundaries that delineate core areas that are competitive with one another, and together they constitute a generally accepted secondary set of competitive areas. In the real estate industry, submarkets are building-type specific and are nonoverlapping contiguous geographic designations with a cumulative sum that matches the boundaries of a market. They contain properties sufficient to provide meaningful information for aggregate statistics."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }

            else if ((readVal == `suburban`)) {
              var result = "Suburban means a geographic area that contains a variety of property types arranged in a setting that is less dense than neighboring urban areas. This broad term can be defined or measured a number of ways and is often defined relative to urban and exurban areas."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `town center`)) {
              var result = "A historical term used to refer to the commercial, civic or geographic center of a community. Today, the term is associated with retail and has come to be known as a robust retail cluster with civic or open spaces in proximity to a variety of uses such as residential, office, retail and hotel."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `transit oriented development`)) {
              var result = "Real estate projects that are built around transit to maximize access to shared transportation modes. Typically, the TOD project is dense and walkable, and it includes a mix of uses such as residential, office, retail, hotel and entertainment."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }

            else if ((readVal == `transit score`)) {
              var result = "Real estate projects that are built around transit to maximize access to shared transportation modes. Typically, the TOD project is dense and walkable, and it includes a mix of uses such as residential, office, retail, hotel and entertainment."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `urban`)) {
              var result = "Urban areas are commonly identified with a city, are typically built on a traditional street grid, have consistent building setbacks, have sidewalks and usually include multiple-story buildings."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `walk score`)) {
              var result = "Walk score is a number between 0 and 100 that measures the number of amenities such as retail, businesses, parks, theaters and schools that can be accessed by foot inside a 1-mile radius from a particular address. 90–100 Walker’s Paradise  Daily errands do not require a car  70–89 Very Walkable  Most errands can be accomplished on foot  50–69 Somewhat Walkable  Some errands can be accomplished on foot  25–49 Car-dependent  Most errands require a car  0–24 Car-dependent  Almost all errands require a car"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `base building definitions`)) {
              var result = "Which of the following terms would you like me to define,?, you could say something like, common area, functional obsolescence, or shell space"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `common area`)) {
              var result = "the generally accessible areas found on each floor of an office building such as washrooms, janitorial closets, electrical rooms, telephone rooms, mechanical rooms, elevator lobbies and public corridors that are available for use by all tenants on that floor. it does not include major vertical penetrations such as elevator shafts, stairways, equipment runs, etc"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `core area`)) {
              var result = "the common area plus vertical penetrations in an office building measured in square feet. Core area is typically expressed as a percentage of net rentable area. this factor, which ranges from 5 to 20 percent for typical office buildings, can be computed for an entire building or a single floor of a building"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `floor plate`)) {
              var result = "the gross square footage of each floor in a multistory building. individual floor plate sizes may vary according to the design of a building."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `functional obsolescence`)) {
              var result = "a descriptive term used to characterize a building that cannot be improved to meet current market standards or tastes without a complete replacement of buildings systems and finishes."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `load factor or core factor`)) {
              var result = "the load factor is calculated by dividing the rentable building area, r, b, a, by the usable area. this factor can then be applied to the usable area to convert it to r, b, a, for comparison. in markets were space is leased on the basis of the usable area, if the load factor is 15 percent, then the usable area can be multiplied by 1.15, resulting in the r, b, a"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `shell space`)) {
              var result = "Space within a property that is currently not built out"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `year built`)) {
              var result = "the year the building was delivered to the market as a result of completed construction"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `year renovated`)) {
              var result = "the year the building last received a certificate of occupancy c, o, o, for a major renovation"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `energy and natural resource efficiency definitions`)) {
              var result = "which of the following terms would you like me to define,?, you could say something like, energy star, or, green globes"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `energy star`)) {
              var result = "also referred to as an e, p, a, rating or an energy Star rating, the rating is a standardized national benchmark that helps architects and building owners assess energy use relative to similar buildings in the program. an energy star qualified building means the building meets e, p, a, criteria for energy efficiency and displays the energy star building label"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `green globes`)) {
              var result = "green globes is a green building guidance and assessment program that offers a way to advance the overall environmental performance and sustainability of commercial buildings. after achieving a minimum of 350 of the total number of 1000 points, new and existing commercial buildings can be certified for their environmental achievements and sustainability by pursuing a green globes certificate that assigns a rating of one to four globes"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `lead, leadership in energy and environmental design`)) {
              var result = "lead is a third party certificate program under the U.S. green building council, u s g b c. it is a nationally accepted benchmark for the design, construction and operation of high-performance sustainable buildings. certificate levels are as follows: certified, silver, gold or platinum. the levels are based on points obtained in six areas: sustainable sites, water efficiency, energy and atmosphere, material and resources, indoor environmental quality, and innovation in design"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `sustainable development`)) {
              var result = "In commercial real estate (CRE), this term generally means the practice of developing, redeveloping and operating CRE in ways that cause zero, minimal or improved environmental impact."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `space markets and lkeasing terminology`)) {
              var result = "Data help provide information about the health of real estate buildings and real estate markets. Real estate metrics run the gamut from basic measures of inventory and available space to indicators of leasing activity, rents, concessions and various forms of leases"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
             else if ((readVal == `space and lease definitions`)) {
              var result = "which of the following terms would you like me to define,?, you could say something like, available space, or competitive inventory"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `available space`)) {
              var result = "The total amount of space that is currently being marketed for lease. It includes space that is vacant or also space that is currently occupied but will be vacant in the future. Available space can include both direct and sublet space. If sublet space is excluded from the calculation, the term direct available space is recommended."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `asking rent`)) {
              var result = "The amount asked by landlords for available space, expressed in dollars per square foot per year in most parts of the country (and per month in areas of California and other selected markets)."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `blend and extend`)) {
              var result = "A blend and extend lease is a type of renewal that allows tenants to blend their existing lease into a new and longer lease. If a tenant is paying rent that is above current market rents, this arrangement will lower the current rental rate. The tenant benefits by an immediate reduction in the rental rate, and the landlord benefits by securing a tenant for a longer term. Conversely, if rents are rising quickly and lease expiration is approaching a tenant may renew early and extend to lock in lower rates"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `competitive inventory`)) {
              var result = "Single-tenant and multi-tenant buildings typically consist of 10,000 square feet or more that are owned by one party and are made available for lease to another party. Owner-occupied and government-owned buildings are typically excluded from the competitive inventory. Note: It is important to note that data providers each have their own set of buildings that make up the competitive inventory in their foundational data set. Some include buildings larger than 20,000 square feet, while others include buildings as small as 5,000 square feet. Those modest differences in the competitive set can cause variations in metrics such as vacancy and absorption reported by each shop."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `competitive set`)) {
              var result = "A subset of total inventory that enables one to isolate and compare buildings on the basis of similar characteristics rather than simply by location. For example, a broker preparing to show available space to a tenant may identify five properties to be toured on the basis of location, square footage available, class, asking rent, parking ratio, etc. An investment sales or finance broker may generate a competitive set of buildings according to access to transit, year built, percentage leased, etc., to help estimate the value of an asset to be bought, sold or refinanced."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `concessions`)) {
              var result = "To secure a tenant when vacancy is high in a market or submarket, a landlord may need to grant concessions in the lease. Those concessions most often take the form of free rent but may also include lease buyouts, moving allowances and above-market tenant improvement allowances."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
              else if ((readVal == `contiguous block(s)`)) {
              var result = "Multiple suites or spaces on either the same floor or the adjoining floor(s) in the same building."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `construction starts`)) {
              var result = "The total number of buildings that broke ground (commenced construction) over a given period. The starts are typically measured in number of buildings and square feet."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
             else if ((readVal == `contract rent`)) {
              var result = "The rental rates stipulated in an executed lease agreement. Typically, the contract rate is based on the first year rate as opposed to the average rate over the term of the lease. (Synonym: base rate)"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `creditworthy tenant`)) {
              var result = "A tenant with a business that has been in existence for numerous years, that has strong financial statements, or that has a large market presence that could be rated as investment grade by a rating agency. Financial and business stability implies that the tenant is highly likely to honor its lease commitment; the tenant is, therefore, viewed as a low-risk renter. Buildings with credit tenants as anchors are considered less risky investments for lenders."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
             else if ((readVal == `creditworthy tenant`)) {
              var result = "A tenant with a business that has been in existence for numerous years, that has strong financial statements, or that has a large market presence that could be rated as investment grade by a rating agency. Financial and business stability implies that the tenant is highly likely to honor its lease commitment; the tenant is, therefore, viewed as a low-risk renter. Buildings with credit tenants as anchors are considered less risky investments for lenders."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            } else if ((readVal == `cubic volume`)) {
              var result = "In many industrial facilities, the cubic volume of the building must be calculated so a user can determine the size and type of racking and sorting equipment that can be accommodated."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `direct new space`)) {
              var result = "Space that is offered for lease directly by the building owner or landlord. If space is offered for lease by a building tenant, it is not direct space but rather is sublet space."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `direct vacancy rate`)) {
              var result = "The total amount of physically vacant space divided by the total amount of existing inventory, expressed as a percentage. Space that is under construction (and, therefore, is vacant) is not included in vacancy calculations."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `effective rate`)) {
              var result = "Expressed in dollars per square foot either per year or per month depending on market standards, it is a measurement of the value of the lease when all the concessions plus escalations are included. Effective rent calculations may vary according to local market practices; for example, in some markets, broker commissions are included."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
             else if ((readVal == `effective rate calculation`)) {
              var result = "Effective Rent = (total rent – free rent – cash allowances) / lease term / rentable square foot Total Rent = rent paid during the term of the lease including escalations Note: Cash allowances can include free rent, moving allowances and other cash considerations.."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `encumbered space`)) {
              var result = "A block of space offered for lease by a landlord to which another tenant has some right to lease or occupy at some future date."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `gross absorption`)) {
              var result = "The total amount of space occupied over a given period of time, without subtracting the amount of space vacated. (Synonym: leasing activity)"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `gross building area`)) {
              var result = "The total interior floor area of a building, usually measured from the inner-most edge of the outside walls."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
             else if ((readVal == `gross lease`)) {
              var result = "A legally binding contract in which a landlord receives stipulated rent from a tenant and is obligated to pay all or most of the property’s operating expenses and real estate taxes. Note: Disclosure of the specified costs of operation is required in some states. (See Common Lease Types Matrix.) (Synonym: full service lease)"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
             else if ((readVal == `ground lease`)) {
              var result = "A lease agreement (contract) whereby the landowner (lessor) agrees to lease a parcel of land for a set period of time to a third party (lessee). Depending on the agreement, the lessor can stipulate what the lessee can or cannot do with the property or build on the property. The lease term is typically 20 years or more, but many extend to 99 years. Upon expiration of the lease agreement, the lessor typically gains control and ownership of whatever is constructed on the land, unless the lease is renewed or an exception is created in the lease."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `leased space`)) {
              var result = "Space under contract between a landlord and a tenant or between a tenant and a subtenant"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `Leasehold`)) {
              var result = "A leasehold is an ownership structure in which a temporary right to use land has been granted by the landowner to another party. (See ground lease.) Although the tenants do not own the land, they are able to improve the land and operate it as stipulated in the ground lease for the term of the lease."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `leasing activity`)) {
              var result = "Leasing activity is a term that refers to the number of leases signed or square footage committed to over a specified period without regard to occupancy. Typically, leases are executed many months before a tenant occupies the space. This arrangement means that a lease can be executed in a given quarter, but the space commitment will not show up in the absorption figures until the space is occupied at some point in the future. Leasing activity includes direct leases, subleases and expansions of existing leases. Leasing activity also includes any preleasing activity in buildings that are under construction, are planned or are under renovation. (Synonym: gross absorption)"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `master lease`)) {
              var result = "A lease in which the landlord receives a stipulated rent, and payment of the property’s operating expenses is divided between the lessor and lessee via specified terms in the lease; also called “Modified Gross,” “Net-net” (Double Net), “Net-net-net” (Triple Net), etc., depending on the degree to which the tenant or landlord are responsible for operating costs. (See Common Lease Types Matrix.)"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
             else if ((readVal == `net absorption`)) {
              var result = "The net change in occupied space over a specified period of time. This change is measured in square feet at the building, submarket and market levels. This figure reflects the amount of space occupied as well as the amount of space vacated. Net absorption can be either positive or negative and must reflect increases and decreases in inventory levels."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
             else if ((readVal == `net lease`)) {
              var result = "A lease in which the tenant pays a share of operating expenses in addition to the stipulated rent. Disclosure of the specific expenses to be paid directly by the tenant is required. (See Common Lease Types Matrix.)."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
             else if ((readVal == `modified lease`)) {
              var result = "The controlling lease identifying the terms and length of the lease. Note that a sublease cannot extend beyond the term of the master lease. (See Common Lease Types Matrix.)"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `new space`)) {
              var result = "Space delivered to the market that was never previously leased or occupied by a tenant."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
             else if ((readVal == `occupancy cost`)) {
              var result = "Includes rent, real estate and personal property taxes, plus insurance, depreciation and amortization expenses."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `occupied space`)) {
              var result = "Space that is physically occupied by a tenant, subtenant or owner. Occupied space is calculated by subtracting total vacant space from total competitive inventory. If subtenant space is excluded from the calculation, then the term “direct occupied space” is recommended."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
             else if ((readVal == `prereleased space`)) {
              var result = "The term applies to space that has been leased in a building that is under construction."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `pro rata share`)) {
              var result = "The percentage that, when multiplied by reimbursable expenses (less an expense stop if referring to a gross lease), equals the amount to be reimbursed by a tenant to the landlord for expense recoveries. Typically, the percentage is calculated by dividing the net rentable area of a tenant’s leased premises by the net rentable area of the building, although this is not always the case."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `relet space`)) {
              var result = "Sometimes called “second-generation space,” it refers to existing space that was previously occupied by a tenant."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `renewal option`)) {
              var result = "the right of a tenant to entend the lease term for a specified period of time at a predefined rental rate. In many instances, the rate is defined as a percentage of market rent, and in other instances, the rate is a specified dollar amount. An auto-renewal option is a type of renewal option whereby the lease term is extended automatically on the expiration date without any notification requirement. Often, there is a date by which this option must be executed; otherwise, the option expires."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `Rentable Building Area, RBA`)) {
              var result = "The total square footage of a building that can be occupied by or assigned to a tenant for the purpose of determining a tenant’s total rental obligation. Generally, RBA includes common areas in the building including hallways, lobbies, bathrooms and phone/data closets"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `Sale or Leaseback`)) {
              var result = "An owner-occupied property that is sold to a third-party investor. The previous owner becomes the tenant that pays rent to the new owner. This tactic allows property owners to convert their ownership (equity) into cash while still occupying the property. The seller’s (now the tenant’s) lease term must be for two or more years."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `Shadow space`)) {
              var result = "A portion of leased space that is not being used by the tenant. This area can include unused space that a tenant leased and is holding for expected future growth. It can also include unused space that was previously occupied but is no longer used as a result of downsizing the company’s workforce. Shadow space is difficult to measure because it is not officially marketed or tracked in industry databases"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `straight line rent`)) {
              var result = "The accumulation of rental income (including months that have free rent, discounted rent and fixed-rent increases) divided by the term of the lease will generate a straight-line rent. Straight-line rent provides a way to compare rents on various properties using a consistent methodology."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            } 
            else if ((readVal == `Sublet Space`)) {
              var result = "Space offered for lease indirectly by a tenant rather than directly by a landlord"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            } 
            else if ((readVal == `takeup`)) {
              var result = "When the space is physically occupied"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            } 
            else if ((readVal == `total inventory`)) {
              var result = "The total number of buildings and total square footage (net rentable area) in the competitive inventory. Buildings under construction are not part of total inventory. Total inventory increases when a new building is delivered and decreases when an existing building is demolished or changes use. Total inventory includes properties under renovation if the building remains inhabitable during the renovation but excludes properties converting to a different use. Total inventory is typically measured at the submarket and market levels. A description of the characteristics and numeric thresholds that make up the total inventory should be provided. The total inventory figure may vary from one data provider to another as a result of tailored definitions of what constitutes the competitive inventory"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            } 
            else if ((readVal == `triple net lease`)) {
              var result = "A lease agreement whereby the tenant pays taxes, maintenance and property insurance as well as all operating costs associated with the tenant’s occupancy, including personal property taxes, janitorial services and all utility costs. The landlord is responsible for the roof and the structure and sometimes the parking lot."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            } 
             else if ((readVal == `usable area`)) {
              var result = "This relative term is best compared to rentable area. Usable area is the amount of space that can actually be used by tenants within the space they lease. For example, columns inside a tenant space are counted in the measure of rentable area, but the space occupied by the column cannot be used by the tenant. A tenant’s usable area does not include common areas in the building"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            } 
            else if ((readVal == `vacancy rate`)) {
              var result = "A measurement expressed as a percentage of the total amount of vacant space divided by the total amount of inventory. This measurement is typically applied to a building, a submarket or a market"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            } 
            else if ((readVal == `vacant space`)) {
              var result = "Inventory that is not currently occupied. If subtenant space is excluded from the calculation, the term “direct vacant space” is recommended"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `work letter`)) {
              var result = "A legal document that outlines the obligations of the landlord relative to the improvements necessary to prepare leased premises for a tenant’s occupancy. Items typically found in a work letter include a description of the improvements, the cost thereof, and the portion of the cost to be paid by the landlord, the completion date and the insurance requirements of contractors performing the improvements"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `Commercial Real Estate (CRE) Investment Sales Terminology`)) {
              var result = "which of the following terms would you like me to define,?, you could say something like, capital expenses, or debt coverage ratio"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `1031 Exchange or Like-kind Exchange`)) {
              var result = "wU.S. Internal Revenue Code Section 1031 permits the deferral of capital gains taxes on the sale of property held for investment or productive use in a trade or a business. With a 1031 exchange, property owners can sell their real estate and then reinvest the proceeds in ownership of a like-kind property or several like-kind properties, thus deferring the capital gains taxes. The like-kind exchange under Section 1031 is tax-deferred, not tax-free. When the replacement property is ultimately sold (not as part of another exchange), the original deferred gain, plus any additional gain realized since the purchase of the replacement property, is subject to tax"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `basis points, b pees`)) {
              var result = "Values equal to one-hundredth of one percentage point. For example, 100 basis points = 1 percentage point"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `capital expenses or cap ex`)) {
              var result = "Improvements (as opposed to repairs) to a fixed asset that will increase the value or useful life of that asset. A capital expenditure is typically amortized or depreciated over the useful life of the asset, as opposed to a repair, which is expensed in the year incurred."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `capitalization rate or cap rate`)) {
              var result = "Unlevered initial return from the acquisition of a real estate asset calculated by dividing net operating income (NOI) by the property sales price. For example, a property’s capitalization rate (cap rate) is 10 percent if it is purchased for $10 million and produces $1 million in NOI during one year. The cap rate is typically calculated using the NOI generated in the first year of ownership so investors can normalize and compare potential returns among competing investment properties."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `commercial mortgage-backed securities`)) {
              var result = "CMBS are a type of bond that is commonly issued in U.S. securities markets and is backed by the cash flow from a pool of mortgages on commercial properties. The CMBS are often arranged into groups or “tranches” according to geography, property type or underlying credit rating."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
             else if ((readVal == `core investment`)) {
              var result = "An investment in a high-quality real estate asset that is located in a highly accessible and highly desirable submarket. The asset commands among that submarket’s highest rents and requires virtually zero near-term capital expenditures. The asset is at least 80 percent leased, carries long-term leases with creditworthy tenants, and is among the most sought-after assets in the market, suggesting there is significant market liquidity."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `debt coverage ratio`)) {
              var result = "The debt coverage ratio is the ratio of the net operating income to the mortgage payment. If net operating income is projected to change over time, the investor typically reports the first year’s net operating income."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `discount rate`)) {
              var result = "Interest rate used in discounted cash flow (DCF) analysis to determine the present value of future cash flows."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `internal rate of return`)) {
              var result = "For income properties, it is the interest or discount rate needed to discount the sum of future net cash flows, including amortization and payments of loans and depreciation of the real property, to an amount equal to the initial equity of the property."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }

            else if ((readVal == `loan to value ratio`)) {
              var result = "The ratio between a mortgage loan and the value of the property pledged as security, usually expressed as a percentage."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `net cash flow`)) {
              var result = "Net cash flow is the annual income produced by an investment property after deducting allowances for capital repairs, leasing commissions, tenant inducements (after the initial lease is up) and debt service from net operating income."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `net operating income`)) {
              var result = "The income generated after deducting operating expenses but before deducting taxes and financing expenses."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `opportunistic investment`)) {
              var result = "Ground-up development of a real estate project is considered an opportunistic investment. It is an investment in a parcel or site that typically involves some or all of the following: rezoning for use or density or both; net new or ground-up construction; conversion of a building from one use to another; complete gut or significant rehab of a building, requiring that it be entirely vacant to complete; introduction of uses not previously seen on this parcel or in this area; etc."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
             else if ((readVal == `real estate investment trust`)) {
              var result = "A REIT is a company that owns or finances income-producing assets, such as apartments, shopping centers, offices and warehouses. It may also invest in air or water rights, unharvested crops, permanent structures and structural components that are part of a structure but don’t themselves produce income. Shares of REITs can be traded like stocks and can allow owners of the shares to participate in the real estate market."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `real estate owned`)) {
              var result = "A sale in which a ender, either institutional or private, sells a property that the lender has taken back through foreclosure."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `recapitalization`)) {
              var result = "A term used when owners liquidate some or most of their ownership position in an asset by selling some or most of their equity position."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `return on investment`)) {
              var result = "A measure of the value created by a real estate investment. It is the difference between the net gains from investing in the property less the net cost from investing in the property divided by the purchase price of the property. Usually, it is reported as a percentage."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `short sale`)) {
              var result = "When the sale price of an asset is less than the amount owed to the lender and when the lender accepts this amount as full payment for the loan. Those funds not repaid to the lender will be written off."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `stabilized cap rate`)) {
              var result = "A stabilized cap rate is the ratio between the net operating income produced by a property upon achieving target occupancy, and its purchase value."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `tenants or tenancy in common`)) {
              var result = "An estate held by two or more persons, each of whom has an undivided interest, which means that each party has the right to sell or transfer the ownership of his or her ownership interest.."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `value add investment`)) {
              var result = "An investment in a real estate asset with existing cash flow (and value) that can be increased by raising occupancy, rents or both. Owners typically carry out one or more of the following to add value to a building: improve or replace building systems, provide new finishes, introduce new amenities, improve access or circulation to the building, add square footage, etc."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            
            else if ((readVal == `apron`)) {
              var result = "The area, within the truck court, where trucks are parked for loading and unloading. This area will be paved with more durable material than will the rest of the truck court (e.g., concrete or other structural reinforcement vs. asphalt) to withstand the heavy loads being parked there."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `automobile parking ratio`)) {
              var result = "A ratio calculated by comparing the number of automobile parking spaces at a project to the gross leasable area (GLA) of a building. This ratio is usually expressed in number of spaces per 1,000 square feet of gross leasable space. It varies by property use, with labor-intensive operations needing higher parking ratios. For example, a building with a GLA of 800,000 sf would have 800 spaces expressed as 8 spaces/1,000 sf."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `bay depth`)) {
              var result = "The distance between columns. (Synonyms: clear span, column spacing)"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `bay width`)) {
              var result = "The distance from one side of the bay to the other."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `biotech space`)) {
              var result = "Highly specialized laboratory or research and development space. The space is uniquely configured and is typically developed to the needs of the biotech tenant. It may require significant retrofit should the tenant vacate the space. The space is often characterized by robust mechanical, electrical and plumbing systems, as well as by sophisticated ventilation systems to accommodate the highly specialized and complex activities that occur inside and that involve the handling of chemicals, drugs and biological matter.."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `cantilever rack`)) {
              var result = "Racking system containing shelving supports that are connected to vertical supports at the rear of the rack. This type of rack is used for storing long material such as lumber and pipingRacking system containing shelving supports that are connected to vertical supports at the rear of the rack. This type of rack is used for storing long material such as lumber and piping"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `ceiling eight`)) {
              var result = "Distance from the floor to the inside overhead upper surface of the room. This measure will be higher than any hanging objects, beams, joists or trusses, unless there is a suspended ceiling."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `ceiling eight`)) {
              var result = "Distance from the floor to the inside overhead upper surface of the room. This measure will be higher than any hanging objects, beams, joists or trusses, unless there is a suspended ceiling."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `clear height`)) {
              var result = "Distance from the floor to the lowest-hanging ceiling member or hanging objects, beams, joists or truss work descending down into a substantial portion of the industrial work area. This is the most important measure of the interior height of an industrial building because it defines the minimum height of usable space within the structure. (Synonyms: clear headway, clearance)"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `clear span`)) {
              var result = "An open area with no obstructions."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }

            else if ((readVal == `column spacing`)) {
              var result = "The distance between posts or vertical supporting beams in a building.."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `cross dock`)) {
              var result = "Loading docks on opposite sides of a relatively shallow distribution facility that allow for quick loading, sorting or unloading from one vehicle to another (i.e., materials from one truck at a loading dock are unloaded, sorted and reloaded onto one or more trucks)."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }

            else if ((readVal == `distribution building`)) {
              var result = "A type of warehouse facility designed to accommodate efficient movement of goods."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
             else if ((readVal == `dock high door`)) {
              var result = "A loading dock door that is not at ground level but rather is elevated to 4 feet in order to be even with the standard tractor-trailer height for loading or unloading goods without a change in elevation. Some doors, called “semidock” or “half dock,” are constructed at a 2-foot height to accommodate smaller or lower delivery trucks."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `door to square foor ratio`)) {
              var result = "The ratio of the total number of loading docks and drive-in doors to the building’s total square feet."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `drive in door`)) {
              var result = "A door through which trucks, forklifts, and other machinery or vehicles can enter and exit without a change in elevation."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `flex facility`)) {
              var result = "As its name suggests, an industrial building designed to be used in a variety of ways. It is usually located in an industrial park setting. Specialized flex buildings can include service centers, showrooms, offices, warehouses and more. (Typical characteristics are shown in the Industrial Building Types Matrix.)"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            
            else if ((readVal == `fulfillment center`)) {
              var result = "An industrial property type that enables goods to be efficiently moved or transported from a warehouse directly to a consumer. (Typical characteristics are shown in the Industrial Building Types Matrix.)"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `high cube`)) {
              var result = "A relative term that refers to industrial buildings with an abundance of clear height or vertical cubic space. (Synonym: high bay)"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `industrial building`)) {
              var result = "A structure used primarily for manufacturing, research and development, production, maintenance, and storage or distribution of goods or both. It can include some office space. Industrial buildings are divided into three primary classifications: manufacturing, warehouse or distribution, and flex. (The typical characteristics of the most common types of industrial buildings are shown in the Industrial Building Types Matrix.)"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            } 
             else if ((readVal == `levelators or levelors`)) {
              var result = "Steel plates that are moved by auto-hydraulic lifts to make a loading dock level with a truck bed. A fully loaded truck may sit 4 to 6 inches lower than a standard 48-inch-high dock. The device is used to account for the difference so a forklift can be driven into and out of a truck. A building equipped with multiple loading docks may not have a levelator for each dock."               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `less than truckload or less than load (ltl) shipping`)) {
              var result = "LTL is the transportation of lightweight freight or smaller groupings of freight"               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `less than truckload or less than load (ltl) shipping`)) {
              var result = "LTL is the transportation of lightweight freight or smaller groupings of freight. LTL shipments typically weigh between 151 and 20,000 lbs. LTL carriers collect freight from various shippers and consolidate that freight onto enclosed trailers for line haul (the movement of cargo between two major cities or ports) to the delivering terminal or to a hub terminal."               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `loading dock`)) {
              var result = "An elevated platform at the shipping or delivery door of a building; it is usually situated at the same height as the floor of a shipping container on a truck or railroad car to facilitate loading and unloading. Loading docks can be exterior ramps that protrude from a building and that are covered with a canopy or some element to protect the loading area from the elements. Otherwise, they can be flush with the exterior of the building and accessed through a sliding door that is adjacent to the interior of the buildin"               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }

            else if ((readVal == `manufacturing building`)) {
              var result = "A facility used for the conversion, fabrication or assembly of raw or partly wrought materials into products or goods. (Typical characteristics are shown in the Industrial Building Types Matrix.)"               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }

            else if ((readVal == `mezzanine office`)) {
              var result = "Office space that is built in an industrial facility. It is usually along the perimeter of a facility and creates an intermediate floor."               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `office percentage`)) {
              var result = "The percentage of total square feet in an industrial building that is built for use as office space. When the mezzanine office is built above a space that would otherwise be an industrial work area, this additional square footage is not counted in the total square footage of the building."               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `push back rack`)) {
              var result = "Racking system with a sliding device that pushes back pallets, thereby allowing multiple pallets to be placed in the same location."               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `radio frequency identification`)) {
              var result = "Inventory-tracking technology embedded in devices that are attached to labels on packages so an item’s location can be tracked."               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `rail door`)) {
              var result = "A door that is generally side-loading, that has access to railroad tracks, and that facilitates the loading or unloading of goods from a railroad car to an industrial building."               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `rail service`)) {
              var result = "A railroad spur adjacent to a building structure that allows the building to be served by rail operations."               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `ramp door`)) {
              var result = "A dock-high door that has been converted to a drive-in door by creating a ramp from ground level to dock level.."               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }

            else if ((readVal == `service center or showroom`)) {
              var result = " A type of flex facility characterized by a substantial showroom area, usually fronting a freeway or major road. (Typical characteristics are shown in the Industrial Building Types Matrix.)"               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `side loading dock`)) {
              var result = "A loading dock configuration designed to facilitate the loading and unloading of a vehicle through its side."               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `super flat floors`)) {
              var result = "Concrete floors with minimal variations in elevation from point to point. The floors are found primarily in warehouses with automated systems. Precisely calibrated and leveled picking machinery and racks require level flooring to ensure proper operation.."
              
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `third party logistics`)) {
              var result = "Businesses that provide one or more logistics services including multiclient warehousing, contract warehousing, transportation management, distribution management, inventory management and freight consolidation."
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `truck court`)) {
              var result = "Exterior area adjacent to an industrial building’s loading docks where trucks maneuver. The most important measure of the truck court is the depth from the building to the end of the truck court. Greater depth allows for greater   maneuverability and better accommodates multiple trucks."
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }

          else if ((readVal == `truck court`)) {
              var result = "Exterior area adjacent to an industrial building’s loading docks where trucks maneuver. The most important measure of the truck court is the depth from the building to the end of the truck court. Greater depth allows for greater   maneuverability and better accommodates multiple trucks."
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `truck terminal`)) {
              var result = "This specialized distribution building for redistributing goods from one truck to another serves as an intermediate transfer point. The facilities are primarily used for staging loads (rather than long-term storage) and possess very little, if any, storage area. (Typical characteristics are shown in the Industrial Building Types Matrix.)"
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `truck turning radius`)) {
              var result = "The tightest turn a truck can make, depending on several variables such as truck configuration, trailer size and location of adjacent objects that obstruct the inner turning radius."
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
          
          else if ((readVal == `truss`)) {
              var result = "A framework of beams forming a rigid structure (as in a roof truss."
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `truss height`)) {
              var result = "Distance from the floor to the bottom edge of a truss used to support the ceiling or roof of a building. If there are hanging objects, beams or joists below the truss, the clear height will be lower than the truss height."
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }

            else if ((readVal == `warehouse`)) {
              var result = "A facility primarily used for the storage or distribution or both of materials, goods and merchandise. (Typical characteristics are shown in the Industrial Building Types Matrix.)"
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }

          else if ((readVal == `accelerator`)) {
              var result = "A programming-based workplace designed to help startup companies grow more rapidly by providing them with technical and educational assistance, mentoring, networking opportunities and workspace."
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `coworking space`)) {
              var result = "Workspace offered for lease for short- to long-term periods in a communal setting. Space for office, artistic or manufacturing use can be leased by the day, month, year or even hour. The physical space leased can range from  a traditional dedicated private office with a door to an unassigned seat on a bench along a communal table. Coworking spaces go beyond just providing a physical work environment. They are typically operated by entities that offer business-related lectures, social events and a sense of community for their entrepreneurial tenants, thus helping them grow their businesses."
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `creative office space`)) {
              var result = "Previously industrial space with high ceilings and exposed air ducts. The space is often made of brick and timber and has been converted to office or studio space that often caters to technology, advertising, media and entertainment tenants (TAME)."
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }

            else if ((readVal == `government office building`)) {
              var result = "A building that is owned (and typically occupied) by public sector entities."
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `incubator`)) {
              var result = " An economic development tool created to support new businesses. Typically lab or office space or both provided for free or at a deep discount in buildings owned or leased by municipalities. Business assistance and financing opportunities may be provided as startups gain momentum. Innovation Center or District  geographic areas with concentrations of innovative firms and entrepreneurial activity that focus on strengthening and growing new businesses and commercializing their products or services or both."
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `innovation center or district`)) {
              var result = "Geographic areas with concentrations of innovative firms and entrepreneurial activity that focus on strengthening and growing new businesses and commercializing their products or services or both."
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `office building related definitions`)) {
              var result = "which of the terms would you like me to define? you can say something like innovation center or district"
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `medical office building`)) {
              var result = "A structure with at least 75 percent of its interior built out to accommodate healthcare providers such as doctors and dentists or healthcare technicians who perform exams with specialized equipment. Typically, the buildings have more robust mechanical, electrical and plumbing systems as well as reinforced floors to accommodate numerous exam rooms and heavy medical equipment."
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `medical office building`)) {
              var result = "A structure with at least 75 percent of its interior built out to accommodate healthcare providers such as doctors and dentists or healthcare technicians who perform exams with specialized equipment. Typically, the buildings have more robust mechanical, electrical and plumbing systems as well as reinforced floors to accommodate numerous exam rooms and heavy medical equipment."
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `mixed use development `)) {
              var result = "The grouping of multiple significant uses within a single site or building such as retail, office, residential or lodging facilities. Examples include office buildings that contain ground-level retail and housing, plus projects that have separate office, retail and multifamily properties. Clustering of at least three different uses such as office, retail, residential and/or hotel adjacent to or in close walkable proximity to one another. Uses can be contained in the same building or dispersed in different buildings that are adjacent to or close to one another."
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `multitenant office building`)) {
              var result = "A building that is not owner occupied and space that is leased to two or more tenants.."
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `office building`)) {
              var result = "A structure providing environments that are conducive to the performance of management and administrative activities, accounting, marketing, information processing, consulting, human resources management, financial and insurance services, educational and medical services, and other professional services. At least 75 percent of the interior space is finished to accommodate office users, but the rest of the space can include other uses such as retail, restaurant or fitness.  "
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `office building`)) {
              var result = "A structure providing environments that are conducive to the performance of management and administrative activities, accounting, marketing, information processing, consulting, human resources management, financial and insurance services, educational and medical services, and other professional services. At least 75 percent of the interior space is finished to accommodate office users, but the rest of the space can include other uses such as retail, restaurant or fitness.  "
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }


           else if ((readVal == `office cando`)) {
              var result = "Short for “office condominium,” this term refers to the ownership structure of an office property in which individual units housed in one structure are sold to independent owners. Typically, there are covenants that govern the activities that can be carried out in and improvements that can be made to each unit. Such covenants also stipulate the distribution of costs related to the maintenance and operations of common elements in the building such as the roof and the elevators."
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            
            else if ((readVal == `office park or office campus`)) {
              var result = "Contiguous acres of land, master-planned with roads, sidewalks and trails, and extensive landscaping that accommodate stand-alone office buildings with adjacent surface parking lots or parking structures."
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `owner occupied office building`)) {
              var result = "Buildings that are occupied by the owner and that generally are not included in the competitive inventory."
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `secured compartmental information fcility or sensitive cmpartmented information facility space`)) {
              var result = "Highly secure space that meets specialized design guidelines and restrictions for building systems relating to data, power, communications, security, ductwork, ventilation and more. The highly controlled facilities are required by firms such as defense contractors or law firms that deal in sensitive industries."
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `single tenant office building`)) {
              var result = "A building for which there is a single lease obligation."
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `stacking plan`)) {
              var result = "A floor-by-floor and suite-by-suite graphical representation of each floor and suite within a building. The plan shows the suite number, the square footage of each suite and the tenant occupying each. On many stacking plans, lease expiration dates are also provided to give a quick view of the occupancy exposure within a building."
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }

          else if ((readVal == `office building classifications`)) {
              var result = "The real estate industry uses a subjective classification system that divides buildings into three qualitative categories: Class A, Class B and Class C. Building classifications are relative and applied to all buildings that make up the competitive inventory in a market. A building that is Class A in a second-tier market may not be Class A in a first-tier market. The designations are determined primarily on the basis of building locations or submarkets, rents, building systems and finishes, and building upkeep and services."
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            } 
            else if ((readVal == `trophy building`)) {
              var result = "A landmark property that is located in a highly desirable submarket, is designed by a recognized architect, and features high-end finishes and modern or efficient systems. This building commands among the highest rents in the market and is more than 80 percent occupied by the market’s premier tenants. It is highly sought after by institutional investors such as pension funds and insurance companies as well as by foreign investors. These properties are more desirable than Class A buildings."
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            } 
           else if ((readVal == `class a building`)) {
              var result = "A classification used to describe an office building with rents in the top 30 to 40 percent of the marketplace. Class A buildings are well-located in major employment centers and typically have good transit, vehicular and pedestrian access. Additionally, they are located adjacent to or in proximity to a high number of retail establishments and business-oriented or fast casual restaurants. Building services are characterized by above-average upkeep and management."
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            } 
            else if ((readVal == `class b building`)) {
              var result = "A classification used to describe an office building with rents that are based between those of Class A and Class C buildings. Class B buildings are in good to fair locations in major employment centers and have good to fair transit, vehicular and pedestrian access. They are located adjacent to or in proximity to a moderate number of retail establishments and business- oriented or fast casual restaurants. Building services are characterized by average upkeep and management."
               
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            } 
            else if ((readVal == `class c building`)) {
              var result = "A classification used to describe an office building with rents in the bottom 10 to 20 percent of the marketplace. Class C buildings are in less-desirable locations relative to the needs of major tenant sectors in the marketplace. They can be older, neglected buildings in good locations or moderate-level buildings in poor locations, so transit, vehicular and pedestrian access may vary. Typically, fewer amenities and restaurants are found in or near these buildings, and they are usually of moderate to low quality. Building services are characterized by below-average upkeep and management."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `retail building related definitions`)) {
              var result = "which of the terms would you like me to define? you can say something like, anchor tenant or, co-tenancy."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `anchor tenant`)) {
              var result = "The primary and usually the largest tenant in a shopping center. Larger shopping centers may have more than one anchor tenant. Rent for anchor tenants is often significantly lower than rent for other tenants in a shopping center because they draw consumers to the center.."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `big box`)) {
              var result = "A freestanding structure occupied by a dominant retailer such as Home Depot"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `breakpoint`)) {
              var result = "The point at which an additional lease rate kicks in. For example, in addition to base rent, after a certain amount of sales revenue is generated in a month, a retailer will pay the landlord some percentage of in-store sales, typically about 5 percent"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `breakpoint`)) {
              var result = "The point at which an additional lease rate kicks in. For example, in addition to base rent, after a certain amount of sales revenue is generated in a month, a retailer will pay the landlord some percentage of in-store sales, typically about 5 percent"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `community center or community shopping center`)) {
              var result = "A retail property with a wide range of apparel and general merchandise stores, as well as discount retailers or department stores such as Walmart, Kmart and Target."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `co tenancy`)) {
              var result = "A clause in a retail tenant’s lease that provides remedies to a tenant in the event that another tenant, typically an anchor or major tenant, ceases its operations at the property."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `e commerce`)) {
              var result = "Electronic commerce is the buying and selling of products or services mostly through the Internet. Typically, transactions are carried out via desktop and laptop computers as well as on mobile devices such as smartphones and smart tablets."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
             else if ((readVal == `experimental retail`)) {
              var result = "The notion that people buy goods online but pursue experiences at brick-and-mortar locations (i.e., do yoga, eat at restaurants, visit flagship stores for  experience and entertainment, etc.)."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `freestanding`)) {
              var result = "A stand-alone retail structure that is not part of a complex (i.e., bank, bowling alley, Walmart, etc.). (See Retail Building Types Matrix.)"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `go dark`)) {
              var result = "A clause in a retail tenant’s lease that allows a tenant to cease operations at a property if a defined event, such as the departure of an anchor tenant, should occur."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `gross leasable area`)) {
              var result = "A site calculated as the summation of all rentable areas plus all common areas of a building."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `high street retail`)) {
              var result = "A concentration of shops in urban or urban-like areas that may also be referred to as “Main Street retail” in the United States and Canada."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `in line store`)) {
              var result = "A retail store placed adjacent to neighboring retailers so that the fronts of the stores are in a straight line and behind what is considered the lease line. Tenants operating in the common area are not considered in-line vendors."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `kiosk`)) {
              var result = "A small, physically independent stand or cart often placed within the common area of a retail structure (typically a regional mall) from which specialty goods are sold."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `kiosk`)) {
              var result = "A small, physically independent stand or cart often placed within the common area of a retail structure (typically a regional mall) from which specialty goods are sold."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `lifestyle center`)) {
              var result = "A type of retail property in an urban-like or Main Street setting with pedestrian circulation in the core and with vehicular circulation along the perimeter. Tenants are typically upscale, national-chain specialty stores, restaurants and theaters."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `locker`)) {
              var result = " storage compartment that enables a purchaser to pick up merchandise at a convenient satellite location. This arrangement allows for a type of self-service parcel delivery. Customers can select any locker location as their delivery address and can retrieve orders at that location by entering a unique pickup code on the locker touchscreen."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `m commerce`)) {
              var result = "Mobile commerce is buying and selling via non-tethered devices such as smartphones and smart tablets."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `neighborhood shopping center`)) {
              var result = "This type of retail property is most commonly found in the United States. Anchored by supermarkets and drug stores, the centers are typically one-level, rectangular structures with surface parking in the front and merchandise loading areas in the back. They provide for the sale of convenience goods (food, drugs, etc.) and personal services (laundry, dry cleaning, etc.) for the day-to-day living needs of the immediate neighborhood."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
             else if ((readVal == `omnichannel retail`)) {
              var result = "The merging of online and brick-and-mortar retail operations so customers can purchase and return items via more than one “channel.” For example, they can buy online and return in store (BORIS), buy online and pick up in store (BOPIS), buy online and pick up at a locker, etc.."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `online or pure play retailer`)) {
              var result = "A retailer that sells exclusively online and does not have any brick-and- mortar retail locations."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `pop up retail`)) {
              var result = "A retail store, restaurant or kiosk intentionally designed to be in a location for a finite amount of time (i.e., a restaurant that opens for six months so it can test a market, or a store that operates in a location during the holiday season only)."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `power center`)) {
              var result = "Among the largest types of retail properties, they typically feature three or more big box retailers such as Home Depot, Target and Walmart. Various smaller retailers are usually clustered together in a community shopping center configuration. Power centers are typically made up of multiple large buildings that are one-level, rectangular structures with surface parking in the front and merchandise loading areas in the back. Often, more money is spent on features and architecture at these locations than at big box shopping centers."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `regional shopping center`)) {
              var result = "Among the largest types of retail properties, the center typically features large anchor tenants that sell general merchandise and fashion. Regional shopping centers were historically configured like traditional suburban malls, but many have evolved to Town Center or Main Street retail formats. Parking is accommodated via surface or structure spaces or both."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `retail flagship`)) {
              var result = "Flagship stores serve as retailers’ main stores and are aimed at serving large numbers of customers. They are found in prominent shopping districts (e.g., Madison Avenue, Savile Row) and target high-income shoppers. They are typically larger than outlet or mall stores and hold large volumes of merchandise. A retailer’s primary location, a store in a prominent location, a chain’s largest store, the store that holds or sells the highest volume of merchandise, or a retailer’s best known location."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `strip shopping center`)) {
              var result = "A strip shopping center is an attached row of stores or service outlets that are managed as a coherent retail entity with onsite parking usually located in front of the stores. Open canopies may connect the storefronts, but a strip center does not have enclosed walkways linking the stores. A strip center may be configured in a straight line or may have an “L” or “U” shape."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `super regional shopping center`)) {
              var result = "The enclosed, large anchor tenants that sell general merchandise and fashion offer more variety than does a regional center. "
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `traditional outlet`)) {
              var result = "The tenants offer a discount version of mainstream retailers and are often called “factory stores.” They usually focus on apparel. Traditionally, the stores have been located far outside a city center. The outlets are designed as a destination or tourist magnet."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            else if ((readVal == `traditional retailer`)) {
              var result = "A retailer that started selling in brick-and-mortar locations but that now also sells items online"
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                 )
              )
            }
            else if ((readVal == `turn key`)) {
              var result = "A term used to describe a landlord’s agreement to provide and pay for improvements to a tenant’s premises. The landlord is required to deliver the premises in a condition ready for the tenant’s stipulated use."
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`${result}`, null, false), {}, {}
                )
              )
            }
            
            else {
              context.succeed(
                generateResponse(
                  buildSpeechletResponse(`Sorry, I did not hear a valid input term. You can say something like define proposed project or say define planned project`, `Sorry, I did not hear a valid input term. You can say something like define proposed project or say define planned project`, false), {}
                )
              )
            }
            break;


          case "definitiongroups":
            //will you for some other purpose
            break;

          case "AMAZON.CancelIntent":
            context.succeed(
              generateResponse(
                buildSpeechletResponse(`Goodbye`, null, true), {}
              )
            )
            break;

          case "AMAZON.HelpIntent":
            context.succeed(
              generateResponse(
                buildSpeechletResponse(`What would you like me to explain?`, "What would you like me to explain?", false), {}
              )
            )
            break;

          case "AMAZON.NoIntent":
            context.succeed(
              generateResponse(
                buildSpeechletResponse(`Goodbye`, null, true), {}
              )
            )
            break;
          case "AMAZON.FallbackIntent":
            context.succeed(
              generateResponse(
                buildSpeechletResponse(`Sorry, I couldn't complete your request successfully. Please say something like define proposed project, or, what is a proposed project. `, null, false), {}
              )
            )
            break;
          case "AMAZON.StopIntent":
            context.succeed(
              generateResponse(
                buildSpeechletResponse(`Thank you for choosing Hive. Have a good day! Goodbye!`, null, true), {}
              )
            )
        }
        break;


      case "SessionEndedRequest":
        break;

      default:
        context.fail(`INVALID REQUEST TYPE: ${event.request.type}`)

    }

  }
  catch (error) { context.fail(`Exception: ${error}`) }

}

buildSpeechletResponse = (outputText, repromptText, shouldEndSession) => {

  return {
    outputSpeech: {
      type: "PlainText",
      text: outputText
    },
    reprompt: {
      outputSpeech: {
        type: "PlainText",
        text: repromptText
      }
    },
    shouldEndSession: shouldEndSession
  }

}

generateResponse = (speechletResponse, sessionAttributes) => {

  return {
    version: "1.0",
    sessionAttributes: sessionAttributes,
    response: speechletResponse
  }
}
