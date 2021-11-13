Feature: PrestaShop

        Background: I as user I would like to register

        @test Register
        Scenario: To see options to register
            Given I as a user wanna access the site
              And I wanna to fill in the fields "test12345@me.com"
             When I click the button
             Then I must to check the radio button
             Then I must to fill in the fields "Luiz" "Araujo" "Teste123"
             Then I must to fill in the fields "Test street" "A" "Florianopolis" "Alabama" "88054"
             Then I must to fill in the fields "48991359456"
             Then I click submit button
