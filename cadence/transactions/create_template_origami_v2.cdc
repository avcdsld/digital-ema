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
                "<svg width=\"400\" height=\"350\" viewBox=\"0 0 400 343.6986\" xmlns=\"http://www.w3.org/2000/svg\">",
                "<defs><linearGradient id=\"woodBase\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#EDD4A0\" /><stop offset=\"20%\" stop-color=\"#E8CC98\" /><stop offset=\"40%\" stop-color=\"#E0C490\" /><stop offset=\"60%\" stop-color=\"#EAD09C\" /><stop offset=\"80%\" stop-color=\"#EDD4A0\" /><stop offset=\"100%\" stop-color=\"#E4C894\" /></linearGradient><pattern id=\"woodGrain\" patternUnits=\"userSpaceOnUse\" width=\"400\" height=\"12\"><rect width=\"400\" height=\"12\" fill=\"url(#woodBase)\" /><line x1=\"0\" y1=\"2\" x2=\"400\" y2=\"2.5\" stroke=\"#C8A060\" stroke-width=\"0.5\" opacity=\"0.3\" /><line x1=\"0\" y1=\"5\" x2=\"400\" y2=\"4.5\" stroke=\"#C09858\" stroke-width=\"0.3\" opacity=\"0.2\" /><line x1=\"0\" y1=\"8\" x2=\"400\" y2=\"8.5\" stroke=\"#C8A060\" stroke-width=\"0.4\" opacity=\"0.25\" /><line x1=\"0\" y1=\"11\" x2=\"400\" y2=\"10.5\" stroke=\"#C09858\" stroke-width=\"0.3\" opacity=\"0.15\" /></pattern></defs>",
                "<path d=\"M 2.3813023,145.70649 198.76697,74.430011 a 3.6136056,3.6034243 0 0 1 2.4761,0 l 196.37562,71.272179 a 3.604988,3.5948311 0 0 1 2.3813,3.37856 c 0,18.43533 0,131.10822 0,191.01587 a 3.604988,3.5948311 0 0 1 -3.61072,3.60199 c -103.46173,0 -298.696969,-0.14322 -392.7727926,-0.14322 A 3.6179143,3.6077209 0 0 1 0,339.95053 V 149.09222 a 3.6207868,3.6105854 0 0 1 2.3813023,-3.38573 z\" style=\"fill:url(#woodGrain);stroke-width:1.43423\" /><path d=\"M 196.55802,3.3196714 V 57.743411 c 0,4.42407 6.894,4.43123 6.894,0 V 3.3196714 c 0,-4.422645 -6.894,-4.429806 -6.894,0 z\" style=\"fill:#9B003F;stroke-width:1.43423\" />",
                "<g id=\"g20\" transform=\"matrix(1.6916911,0,0,1.6916911,321.11202,265.25726)\">",
                "<path style=\"fill:",
                "$color",
                "\" d=\"m 38.159,7.992 -11.885,14.42 c -0.351,0.427 -0.668,1.218 -0.709,1.769 l -0.752,10.26 c -0.041,0.551 0.354,1.132 0.881,1.298 l 1.307,0.412 c 0.527,0.166 1.109,-0.119 1.302,-0.638 L 38.446,8.158 C 38.639,7.64 38.51,7.566 38.159,7.992 Z\" id=\"path18\" />",
                "<path style=\"fill:",
                "$color",
                "\" d=\"M 12.154,21.367 6.328,13.651 C 5.995,13.21 5.307,13.012 4.79,13.208 L 3.621,13.652 C 3.363,13.75 3.092,13.945 2.864,14.18 2.506,14.548 2.067,15.799 1.706,16.843 l -0.983,2.845 c -0.361,1.044 -0.896,2.211 -0.668,2.361 0.076,0.047 0.225,-0.017 0.429,-0.201 l 3.163,-2.872 c 0.409,-0.371 0.884,-0.249 1.065,0.273 1.191,3.433 4.638,13.181 5.727,16.259 0.184,0.521 0.76,0.805 1.285,0.635 l 0.904,-0.292 c 0.526,-0.171 0.924,-0.755 0.89,-1.306 l -0.7,-11.383 c -0.034,-0.55 -0.331,-1.354 -0.664,-1.795 z\" id=\"path19\" />",
                "<path style=\"fill:",
                "$color",
                "\" d=\"M 23.677,18.69 19.966,4.671 C 19.683,3.603 19.476,2.337 19.2,2.338 18.924,2.339 18.722,3.606 18.444,4.675 l -4.145,15.948 c -0.139,0.534 -0.228,1.415 -0.2,1.965 l 0.092,1.783 0.517,9.969 c 0.009,0.174 0.018,0.334 0.026,0.473 0.015,0.261 0.242,0.38 0.514,0.304 0.146,-0.04 0.315,-0.084 0.496,-0.128 l 2.479,-0.604 c 0.537,-0.129 1.406,-0.129 1.943,0.002 l 3.405,0.838 c 0.022,0.007 0.649,-10.018 0.649,-10.018 l 0.162,-2.619 c 0.017,-0.276 0.004,-0.633 -0.03,-0.989 -0.054,-0.544 -0.392,-1.841 -0.675,-2.909 z\" id=\"path20\" /></g>",
                "<style type=\"text/css\">p {font-family: serif; color: black; font-size: ",
                "$messageFontSize",
                "; display: inline-block; vertical-align: middle; text-align: left;}</style><foreignObject x=\"30\" y=\"145\" width=\"345\" height=\"170\"><p xmlns=\"http://www.w3.org/1999/xhtml\">",
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
            name: "Digital Ema - Origami Crane",
            description: "Card design for the Digital Ema project.",
            renderer: renderer
        )

        let templateIds = templatesRef.getIDs()
    }
}
