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
                "<g id=\"g19\" transform=\"matrix(1.6287108,0,0,1.6287108,308.16909,263.74215)\">",
                "<path style=\"fill:",
                "$color",
                "\" d=\"m 21.442,24.339 c 0.072,-0.009 1.777,-0.21 2.865,-0.21 0.382,0 0.65,0.024 0.846,0.082 l 0.895,-0.493 c 0.08,-0.044 0.17,-0.066 0.258,-0.066 0.114,0 0.229,0 0.323,0.072 0.009,0.006 0.812,0.568 1.614,0.568 l 0.066,-0.076 c 0.008,0 0.015,0 0.022,0 0.112,0 0.222,0.11 0.312,0.176 0.084,0.061 6.545,4.734 15.101,8.481 0.024,-0.382 0.058,-0.759 0.058,-1.146 0,-9.622 -7.801,-17.422 -17.423,-17.422 -9.292,0 -16.863,7.281 -17.372,16.446 4.3,-1.952 8.403,-4.068 12.227,-6.342 0.063,-0.037 0.134,-0.061 0.208,-0.07 z\" id=\"path18\" />",
                "<path style=\"fill:",
                "$color",
                "\" d=\"m 43.713,33.459 c -8.795,-3.8 -15.382,-8.561 -15.382,-8.561 -0.029,0.001 -0.059,0.002 -0.089,0.002 -1.004,0 -1.937,-0.715 -1.937,-0.715 l -1.183,0.649 c 0.026,-0.128 -0.328,-0.172 -0.822,-0.172 -1.069,0 -2.807,0.206 -2.807,0.206 -4.226,2.512 -8.476,4.659 -12.519,6.483 -1.831,0.826 -3.623,1.594 -5.344,2.286 0.554,0.343 1.031,0.632 1.14,0.632 0.271,0 -4.77,2.457 -4.77,2.457 l 4.036,-1.24 v 0.359 0.182 l 3.152,-0.631 3.287,-0.777 -3.089,2.107 5.083,-2.107 1.01,1.049 2.984,-3.157 -0.447,2.706 2.257,-1.264 c 0,0 -3.425,3.608 -3.155,3.697 0.003,0.002 0.007,0.002 0.012,0.002 0.38,0 5.218,-3.518 5.218,-3.518 0,0 -2,2.705 -1.496,2.887 0.042,0.014 0.124,0.021 0.239,0.021 1.276,0 6.72,-0.909 9.283,-2.729 0.878,-0.623 1.562,-0.837 2.084,-0.837 1.142,0 1.522,1.019 1.522,1.019 l 4.148,2.164 -1.714,-1.577 c 0,0 0.281,-0.025 0.709,-0.025 0.854,0 2.298,0.101 3.259,0.701 0.268,0.167 0.436,0.235 0.532,0.235 0.427,0 -0.532,-1.317 -0.532,-1.317 0,0 6.672,2.254 7.395,2.345 0.02,0.002 0.035,0.004 0.051,0.004 0.521,0 -2.125,-1.537 -2.125,-1.537 l 4.328,0.812 3.895,0.386 c 0.01,-0.088 0.022,-0.176 0.031,-0.264 -2.866,-0.806 -5.649,-1.843 -8.244,-2.963 z\" id=\"path19\" /></g>",
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
            name: "Digital Ema - Fuji",
            description: "Card design for the Digital Ema project.",
            renderer: renderer
        )

        let templateIds = templatesRef.getIDs()
    }
}
