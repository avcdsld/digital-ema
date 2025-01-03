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
                "<g id=\"g2\" transform=\"matrix(0.15145279,0,0,0.15145279,313.06868,261.32738)\">",
                "<path class=\"st0\" d=\"m 395.25,443.374 c -2.552,-2.5 -4.37,-5.249 -5.636,-8.24 -1.886,-4.469 -2.424,-9.521 -1.552,-14.315 0.886,-4.795 3.029,-9.21 6.748,-13.035 l 47.694,-48.899 c 8.953,-9.164 15.724,-19.852 20.148,-31.19 6.65,-17.011 8.12,-35.424 4.484,-53.041 -3.613,-17.595 -12.482,-34.523 -26.267,-47.944 -9.164,-8.953 -19.86,-15.724 -31.19,-20.147 -17.011,-6.65 -35.424,-8.12 -53.034,-4.491 -17.602,3.62 -34.53,12.489 -47.959,26.274 l -77.816,79.77 c -2.499,2.552 -5.256,4.378 -8.248,5.636 -4.46,1.886 -9.52,2.424 -14.307,1.56 -4.802,-0.894 -9.21,-3.037 -13.034,-6.755 -2.552,-2.492 -4.37,-5.242 -5.635,-8.241 -1.886,-4.469 -2.424,-9.513 -1.553,-14.3 0.886,-4.802 3.029,-9.218 6.74,-13.042 l 20.087,-20.586 c 8.952,-9.165 15.723,-19.86 20.146,-31.19 6.651,-17.012 8.12,-35.424 4.484,-53.034 -3.469,-16.906 -11.831,-33.137 -24.677,-46.293 L 204.194,86.409 C 198.15,66.292 182.024,50.795 161.688,45.539 l -40.34,-10.437 c -7.513,-1.939 -15.496,0.288 -20.919,5.832 L 85.613,56.125 c -5.423,5.552 -7.446,13.588 -5.316,21.048 l 11.429,40.074 c 5.764,20.208 21.654,35.932 41.923,41.491 l 33.174,9.089 c 0,0 3.136,6.514 4.393,9.506 1.886,4.477 2.424,9.52 1.56,14.307 -0.894,4.803 -3.037,9.218 -6.756,13.043 l -20.08,20.587 c -8.945,9.172 -15.716,19.859 -20.146,31.19 -6.643,17.011 -8.112,35.424 -4.477,53.041 3.606,17.595 12.482,34.531 26.26,47.952 9.164,8.953 19.859,15.724 31.19,20.148 17.012,6.65 35.424,8.112 53.042,4.484 17.602,-3.62 34.523,-12.482 47.951,-26.267 l 77.824,-79.778 c 2.5,-2.545 5.249,-4.37 8.24,-5.628 4.469,-1.886 9.521,-2.432 14.3,-1.56 4.802,0.894 9.225,3.037 13.042,6.748 2.56,2.5 4.378,5.249 5.635,8.24 1.893,4.469 2.431,9.521 1.56,14.308 -0.886,4.802 -3.037,9.21 -6.748,13.042 l -47.702,48.891 c -8.953,9.164 -15.716,19.867 -20.147,31.198 -6.643,17.004 -8.112,35.416 -4.476,53.034 3.606,17.602 12.482,34.522 26.26,47.952 41.18,40.165 117.088,11.262 123.087,-18.05 -21.594,1.538 -55.397,-7.574 -75.385,-30.841 z\" style=\"fill:",
                "$color",
                "\" id=\"path1\" />",
                "<path class=\"st0\" d=\"m 92.786,42.461 c 0,0 -32.19,-30.403 -31.713,-42.461 -7.165,7.166 0.576,20.284 0.576,20.284 0,0 -13.118,-7.741 -20.284,-0.576 12.066,-0.478 42.468,31.706 42.468,31.706 z\" style=\"fill:",
                "$color",
                "\" id=\"path2\" /></g>",
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
            name: "Digital Ema - Snake",
            description: "Card design for the Digital Ema project.",
            renderer: renderer
        )

        let templateIds = templatesRef.getIDs()
    }
}
