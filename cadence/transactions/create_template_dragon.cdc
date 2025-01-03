import "NonFungibleToken"
import "MessageCard"
import "MessageCardRenderers"

transaction {
    prepare(signer: auth(BorrowValue, SaveValue, IssueStorageCapabilityController, PublishCapability) &Account) {
        if signer.storage.borrow<&MessageCard.Templates>(from: MessageCard.TemplatesStoragePath) == nil {
            signer.storage.save(<- MessageCard.createEmptyTemplateCollection(), to: MessageCard.TemplatesStoragePath)
            let cap: Capability = signer.capabilities.storage.issue<&MessageCard.Templates>(MessageCard.TemplatesStoragePath)
            signer.capabilities.publish(cap, at: MessageCard.TemplatesPublicPath)
        }

        let renderer = MessageCardRenderers.SvgPartsRenderer(
            svgParts: [
                "<svg width=\"400\" height=\"350\" viewBox=\"0 0 400 343.6986\" id=\"svg603\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\">",
                "<path class=\"a\" d=\"M 2.3813023,145.70649 198.76697,74.430011 a 3.6136056,3.6034243 0 0 1 2.4761,0 l 196.37562,71.272179 a 3.604988,3.5948311 0 0 1 2.3813,3.37856 c 0,18.43533 0,131.10822 0,191.01587 a 3.604988,3.5948311 0 0 1 -3.61072,3.60199 c -103.46173,0 -298.696969,-0.14322 -392.7727926,-0.14322 A 3.6179143,3.6077209 0 0 1 0,339.95053 V 149.09222 a 3.6207868,3.6105854 0 0 1 2.3813023,-3.38573 z\" id=\"path593\" style=\"fill:#febe69;stroke-width:1.43423\" /><path class=\"c\" d=\"M 196.55802,3.3196714 V 57.743411 c 0,4.42407 6.894,4.43123 6.894,0 V 3.3196714 c 0,-4.422645 -6.894,-4.429806 -6.894,0 z\" id=\"path597\" style=\"fill:#9B003F;stroke-width:1.43423\" />",
                "<g id=\"g1\" transform=\"matrix(0.16236386,0,0,0.16236386,311.14911,263.32786)\">",
                "<path style=\"fill:",
                "$color",
                "\" d=\"m 461.046,372.68 24.61,-2.894 c -21.101,-24.89 -42.748,-42.21 -62.228,-54.114 l 21.646,-11.91 -55.204,-31.391 37.338,-17.858 -64.94,-37.338 27.601,-17.858 -60.774,-21.27 c 5.808,-7.003 8.066,-14.216 7.94,-20.919 L 456.529,67.221 c 3.138,-2.362 3.942,-6.752 1.86,-10.079 l -3.621,-5.746 c -2.222,-3.551 -6.885,-4.613 -10.436,-2.397 l -56.798,35.633 -3.816,19.13 -6.451,-52.652 c -11.784,-13.63 -18.83,-1.685 -18.83,-1.685 l 0.168,54.658 -39.002,26.142 c -6.248,-3.027 -13.014,-3.341 -18.2,0.489 L 263.98,154.8 c 0,0 -41.868,-12.302 -67.847,6.094 -7.654,5.424 -17.313,17.321 -60.606,9.737 -4.501,-0.79 -33.208,-3.872 -59.174,-11.33 -0.965,-12.106 -10.988,-21.668 -23.345,-21.668 -3.285,0 -6.41,0.678 -9.254,1.902 -21.836,-37.716 -60.313,-9.373 -35.947,33.263 l 12.029,24.82 7.283,3.271 7.786,3.495 c -0.112,12.421 1.86,38.911 19.515,50.94 -0.923,-2.74 2.859,-23.401 9.31,-38.002 l 3.02,1.356 12.134,5.312 c 0.657,12.923 4.138,32.529 18.383,42.245 -0.762,-2.306 1.964,-17.991 6.864,-31.187 l 23.862,10.45 c 1.965,11.365 6.57,24.065 17.167,31.292 -0.587,-1.789 0.922,-11.603 3.9,-22.066 l 36.807,16.126 c 1.328,0.594 2.257,1.852 2.446,3.292 l 0.783,12.854 c 0.272,2.118 -1.076,4.096 -3.159,4.613 l -44.083,22.318 c -7.039,-8.639 -13.036,-19.458 -13.064,-21.366 -6.57,8.876 -6.263,20.717 -4.404,30.209 l -18.27,9.254 c -8.464,-10.666 -16.034,-26.77 -15.866,-29.216 -10.023,11.547 -8.73,29.076 -6.402,40.483 l -11.568,5.864 c 0,0 2.872,4.613 8.01,12.134 6.717,9.862 17.509,28.797 22.192,32.474 9.352,7.318 22.338,15.237 22.338,15.237 l -7.269,-26.861 20.675,7.129 v -16.237 c 135.192,-41.602 168.602,58.6 181.121,94.387 H 512 c -8.555,-22.249 -40.47,-79.963 -50.954,-94.738 z\" id=\"path1\" /></g>",
                "<style type=\"text/css\">p {font-family: serif; color: black; font-size: ",
                "$messageFontSize",
                "; display: inline-block; vertical-align: middle;}</style><foreignObject x=\"30\" y=\"145\" width=\"345\" height=\"170\"><p xmlns=\"http://www.w3.org/1999/xhtml\">",
                "$message",
                "</p></foreignObject><foreignObject x=\"30\" y=\"290\" width=\"345\" height=\"50\"><p style=\"font-size: ",
                "$nameFontSize",
                "\" xmlns=\"http://www.w3.org/1999/xhtml\">",
                "$name",
                "</p></foreignObject></svg>"
            ],
            replaceKeyAndParamKeys: {
                "$messageFontSize": "$messageFontSize",
                "$message": "$message",
                "$nameFontSize": "$nameFontSize",
                "$name": "$name",
                "$color": "$color"
            },
            extraData: {},
        )

        let templatesRef = signer.storage.borrow<auth(MessageCard.CreateTemplate) &MessageCard.Templates>(from: MessageCard.TemplatesStoragePath) ?? panic("Not Found")
        templatesRef.createTemplate(
            name: "Digital Ema - Dragon",
            description: "Card design for the Digital Ema project.",
            renderer: renderer
        )

        let templateIds = templatesRef.getIDs()
    }
}
