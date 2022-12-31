import NonFungibleToken from "../contracts/core/NonFungibleToken.cdc"
import MessageCard from "../contracts/MessageCard.cdc"
import MessageCardRenderers from "../contracts/MessageCardRenderers.cdc"

transaction {
    prepare(signer: AuthAccount) {
        if signer.borrow<&MessageCard.Templates>(from: MessageCard.TemplatesStoragePath) == nil {
            signer.save(<- MessageCard.createEmptyTemplateCollection(), to: MessageCard.TemplatesStoragePath)
            signer.link<&MessageCard.Templates{MessageCard.TemplatesPublic}>(
                MessageCard.TemplatesPublicPath,
                target: MessageCard.TemplatesStoragePath
            )
        }

        let renderer = MessageCardRenderers.SvgPartsRenderer(
            svgParts: [
                "<svg width=\"400\" height=\"350\" viewBox=\"0 0 400 343.6986\" id=\"svg603\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\">",
                "<defs id=\"defs591\"> <style id=\"style589\">.a{fill:#febe69;}.b{fill:#f2635f;}.c{fill:#645d5c;}.d{fill:#ffebd2;}</style> <mask id=\"mask0-7-3\" mask-type=\"alpha\" maskUnits=\"userSpaceOnUse\" x=\"39\" y=\"55\" width=\"455\" height=\"446\"> <path fillRule=\"evenodd\" clipRule=\"evenodd\" d=\"M 493.04,282.859 C 493.04,242.218 481.083,84.4307 328.083,60.5287 192.129,39.2851 79.4516,82.0429 50.768,218.31 22.0783,354.577 48.3742,481.28 148.782,493.238 249.196,505.189 277.88,500.407 383.069,495.625 488.258,490.844 493.04,323.499 493.04,282.859 Z\" fill=\"#ff5a9d\" id=\"path440-3-6\" /> </mask> </defs>",
                "<path class=\"a\" d=\"M 2.3813023,145.70649 198.76697,74.430011 a 3.6136056,3.6034243 0 0 1 2.4761,0 l 196.37562,71.272179 a 3.604988,3.5948311 0 0 1 2.3813,3.37856 c 0,18.43533 0,131.10822 0,191.01587 a 3.604988,3.5948311 0 0 1 -3.61072,3.60199 c -103.46173,0 -298.696969,-0.14322 -392.7727926,-0.14322 A 3.6179143,3.6077209 0 0 1 0,339.95053 V 149.09222 a 3.6207868,3.6105854 0 0 1 2.3813023,-3.38573 z\" id=\"path593\" style=\"fill:#febe69;stroke-width:1.43423\" /> <path class=\"c\" d=\"M 196.55802,3.3196714 V 57.743411 c 0,4.42407 6.894,4.43123 6.894,0 V 3.3196714 c 0,-4.422645 -6.894,-4.429806 -6.894,0 z\" id=\"path597\" style=\"fill:#9B003F;stroke-width:1.43423\" />",
                "<g id=\"use464\" style=\"fill:#db8c81\" transform=\"matrix(0.11675767,0,0,0.11657945,322.92656,265.19821)\"> <path fillRule=\"evenodd\" clipRule=\"evenodd\" d=\"M 530,270.828 C 530,124.577 411.357,6.01685 265.003,6.01685 118.643,6.01685 0,124.577 0,270.828 V 409.23 c 0,64.862 53.1101,117.935 118.023,117.935 h 293.96 C 476.89,527.165 530,474.092 530,409.23 Z\" fill=\"#ffffff\" id=\"path783\" /> <mask id=\"mask787\" mask-type=\"alpha\" maskUnits=\"userSpaceOnUse\" x=\"39\" y=\"55\" width=\"455\" height=\"446\"> <path fillRule=\"evenodd\" clipRule=\"evenodd\" d=\"M 493.04,282.859 C 493.04,242.218 481.083,84.4307 328.083,60.5287 192.129,39.2851 79.4516,82.0429 50.768,218.31 22.0783,354.577 48.3742,481.28 148.782,493.238 249.196,505.189 277.88,500.407 383.069,495.625 488.258,490.844 493.04,323.499 493.04,282.859 Z\" fill=\"#ff5a9d\" id=\"path785\" /> </mask> <g mask=\"url(#mask0-7-3)\" id=\"g795\"> <rect x=\"309.319\" y=\"-350.46701\" width=\"148.78\" height=\"1786.53\" transform=\"rotate(25.3087,309.319,-350.467)\" fill=\"#ff5a9d\" id=\"rect789\" /> <rect x=\"467.60501\" y=\"-345.08499\" width=\"161.65601\" height=\"1941.13\" transform=\"rotate(25.3087,467.605,-345.085)\" fill=\"#ffe922\" id=\"rect791\" /> <rect x=\"666.44098\" y=\"-387.70999\" width=\"179.817\" height=\"2159.21\" transform=\"rotate(25.3087,666.441,-387.71)\" fill=\"#60c5e5\" id=\"rect793\" /> </g> <path fillRule=\"evenodd\" clipRule=\"evenodd\" d=\"m 360.968,167 c -44.73,0 -82.857,28.299 -97.448,67.972 C 248.928,195.299 210.802,167 166.065,167 108.734,167 62.2588,213.475 62.2588,270.807 c 0,57.331 46.4752,103.806 103.8062,103.806 44.737,0 82.863,-28.299 97.455,-67.971 14.591,39.672 52.718,67.971 97.448,67.971 57.331,0 103.806,-46.475 103.806,-103.806 C 464.774,213.475 418.299,167 360.968,167 Z\" fill=\"#ffffff\" id=\"path797\" /> <path d=\"M 130.708,210 C 106.104,210 91,231.473 91,249.08 c 0,38.076 43.377,73.425 74,95.92 30.623,-22.503 74,-57.844 74,-95.92 C 239,231.471 223.903,210 199.292,210 185.549,210 173.804,220.934 165,231.315 156.188,220.933 144.452,210 130.708,210 Z\" fill=\"#ff5a9d\" id=\"path799\" /> <path fillRule=\"evenodd\" clipRule=\"evenodd\" d=\"m 247.719,229.838 c 0,16.456 -13.34,29.791 -29.79,29.791 -16.456,0 -29.79,-13.335 -29.79,-29.791 0,-16.45 13.334,-29.79 29.79,-29.79 16.45,0 29.79,13.34 29.79,29.79 z\" fill=\"#ffffff\" id=\"path801\" /> <path d=\"M 324.708,204 C 300.104,204 285,225.474 285,243.081 c 0,38.076 43.377,73.425 74,95.92 30.623,-22.503 74,-57.844 74,-95.92 C 433,225.472 417.903,204 393.292,204 379.549,204 367.804,214.935 359,225.316 350.188,214.934 338.452,204 324.708,204 Z\" fill=\"#ff5a9d\" id=\"path803\" /> <path fillRule=\"evenodd\" clipRule=\"evenodd\" d=\"m 441.719,223.839 c 0,16.456 -13.34,29.791 -29.79,29.791 -16.456,0 -29.79,-13.335 -29.79,-29.791 0,-16.45 13.334,-29.79 29.79,-29.79 16.45,0 29.79,13.34 29.79,29.79 z\" fill=\"#ffffff\" id=\"path805\" /> </g>",
                "<style type=\"text/css\">p {font-family: serif; color: black; font-size: ",
                "$messageFontSize",
                ";}</style> <foreignObject x=\"30\" y=\"145\" width=\"345\" height=\"170\"> <p xmlns=\"http://www.w3.org/1999/xhtml\">",
                "$message",
                "</p> </foreignObject> <foreignObject x=\"30\" y=\"290\" width=\"345\" height=\"50\"> <p style=\"font-size: ",
                "$nameFontSize",
                "\" xmlns=\"http://www.w3.org/1999/xhtml\">",
                "$name",
                "</p></foreignObject></svg>"
            ],
            replaceKeyAndParamKeys: {
                "$messageFontSize": "$messageFontSize",
                "$message": "$message",
                "$nameFontSize": "$nameFontSize",
                "$name": "$name"
            },
            extraData: {},
        )

        let templatesRef = signer.borrow<&MessageCard.Templates>(from: MessageCard.TemplatesStoragePath) ?? panic("Not Found")
        templatesRef.createTemplate(
            name: "Digital Ema - Dappy",
            description: "Card design featuring Dappy, created for the Digital Ema project.",
            renderer: renderer
        )

        let templateIds = templatesRef.getIDs()
    }
}
