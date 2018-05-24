
#import "RNStyledDialogs.h"

@implementation RNStyledDialogs

@synthesize bridge = _bridge;

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()

PMAlertController *alertVC = nil;
RCTResponseSenderBlock onCancellable = nil;
NSTimer *_timer = NULL;

-(void)onCancellable {
    if (_timer != NULL) {
        [_timer invalidate];
        _timer = NULL;
    }

    id<UIApplicationDelegate> app = [[UIApplication sharedApplication] delegate];
    [((UINavigationController*) app.window.rootViewController) dismissViewControllerAnimated:YES completion:^{
        onCancellable(@[]);
    }];
}

RCT_EXPORT_METHOD(Show:(nonnull NSDictionary *)props onSelection:(RCTResponseSenderBlock)onSelection onCancellable:(RCTResponseSenderBlock)onCancel) {
    dispatch_async(dispatch_get_main_queue(), ^{
        NSString *title = [props objectForKey: @"title"];
        NSString *titleColor = [props objectForKey: @"titleColor"];

        NSString *description = [props objectForKey: @"description"];
        NSString *descriptionColor = [props objectForKey: @"descriptionColor"];
        
        NSString *positiveText = [props objectForKey: @"positiveText"];
        NSString *positiveTextColor = [props objectForKey: @"positiveTextColor"];
        NSString *positiveBackgroundColor = [props objectForKey: @"positiveBackgroundColor"];

        NSString *neutralText = [props objectForKey: @"neutralText"];
        NSString *neutralTextColor = [props objectForKey: @"neutralTextColor"];
        NSString *neutralBackgroundColor = [props objectForKey: @"neutralBackgroundColor"];

        NSString *negativeText = [props objectForKey: @"negativeText"];
        NSString *negativeTextColor = [props objectForKey: @"negativeTextColor"];
        NSString *negativeBackgroundColor = [props objectForKey: @"negativeBackgroundColor"];

        NSString *headerBackgroundColor = [props objectForKey: @"headerBackgroundColor"];
        NSString *headerIcon = [props objectForKey: @"headerIcon"];

        NSNumber *darkerOverlay = [props objectForKey: @"darkerOverlay"];
        NSNumber *dialogAnimation = [props objectForKey: @"dialogAnimation"];
        
        NSNumber *cancelable = [props objectForKey: @"cancelable"];
        NSNumber *autoDismiss = [props objectForKey: @"autoDismiss"];
        
        NSNumber *input = [props objectForKey: @"input"];
        NSString *placeholder = [props objectForKey: @"placeholder"];

        __block UITextField *inputField;
        
        UIImage *hBImage = nil;

        if ([headerIcon length] > 0) {
            hBImage = [UIImage imageNamed: headerIcon];
        }

        alertVC = [[PMAlertController alloc] initWithTitle:title description:description image: hBImage style:PMAlertControllerStyleAlert];

        // Darker Overlay
        if ([darkerOverlay intValue] == 1) {

            // Create a gradient layer
            CAGradientLayer *layer = [CAGradientLayer layer];

            // gradient from transparent to black
            layer.colors = @[(id)[UIColor clearColor].CGColor, (id)[UIColor blackColor].CGColor];

            // set frame to whatever values you like (not hard coded like here of course)
            layer.frame = [[UIScreen mainScreen] bounds];

            // add the gradient layer as a sublayer of you image view
            [alertVC.alertMaskBackground.layer addSublayer: layer];
        }

        if ([input intValue] == 1) {
            [alertVC addTextField:^(UITextField * _Nullable textField) {
                inputField = textField;
                textField.placeholder = placeholder;
            }];
        }

        // Neutral Text
        if ([neutralText length] > 0) {
            PMAlertAction *neutral = [[PMAlertAction alloc] initWithTitle:neutralText style:PMAlertActionStyleCancel action:^{
                onSelection(@[@"neutral"]);
            }];

            if ([neutralBackgroundColor length] > 0) {
                neutral.backgroundColor = [RNStyledDialogs ColorWithHexString: neutralBackgroundColor];
            }
            if ([neutralTextColor length] > 0) {
                [neutral setTitleColor: [RNStyledDialogs ColorWithHexString: neutralTextColor] forState: UIControlStateNormal];
            }
            [alertVC addAction: neutral];
        }

        // Negative Text
        if ([negativeText length] > 0) {
            PMAlertAction *negative = [[PMAlertAction alloc] initWithTitle:negativeText style:PMAlertActionStyleCancel action:^{
                onSelection(@[@"negative"]);
            }];

            if ([negativeBackgroundColor length] > 0) {
                negative.backgroundColor = [RNStyledDialogs ColorWithHexString: negativeBackgroundColor];
            }
            if ([negativeTextColor length] > 0) {
                [negative setTitleColor: [RNStyledDialogs ColorWithHexString: negativeTextColor] forState: UIControlStateNormal];
            }
            [alertVC addAction: negative];
        }

        // Positive Text
        if ([positiveText length] > 0) {
            PMAlertAction *positive = [[PMAlertAction alloc] initWithTitle:positiveText style:PMAlertActionStyleDefault action:^{
                if (inputField == nil) {
                    onSelection(@[@"positive"]);
                } else {
                    onSelection(@[@"positive", inputField.text]);
                }
            }];

            if ([positiveBackgroundColor length] > 0) {
                positive.backgroundColor = [RNStyledDialogs ColorWithHexString: positiveBackgroundColor];
            }
            if ([positiveTextColor length] > 0) {
                [positive setTitleColor: [RNStyledDialogs ColorWithHexString: positiveTextColor] forState: UIControlStateNormal];
            }
            
            [alertVC addAction: positive];
        }
        
        if ([headerBackgroundColor length] > 0) {
            UIView *headerView = alertVC.headerView;
            headerView.backgroundColor = [RNStyledDialogs ColorWithHexString: headerBackgroundColor];
        }

        BOOL animated = YES;
        if ([dialogAnimation intValue] == 0) {
            animated = NO;
        }

        if ([cancelable intValue] == 1) {
            onCancellable = onCancel;
            
            UITapGestureRecognizer *singleTap = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(onCancellable)];
            singleTap.numberOfTapsRequired = 1;
            
            [alertVC.alertMaskBackground addGestureRecognizer: singleTap];
        }
        
        if ([autoDismiss intValue] == 1) {
            _timer = [NSTimer scheduledTimerWithTimeInterval: 5
                 target:self
               selector: @selector(onCancellable)
               userInfo: nil
                repeats:YES];
        }

        
        id<UIApplicationDelegate> app = [[UIApplication sharedApplication] delegate];
        [((UINavigationController*) app.window.rootViewController) presentViewController:alertVC animated:animated completion:nil];
    });
}


+ (CGFloat) colorComponentFrom: (NSString *) string start: (NSUInteger) start length: (NSUInteger) length {
    NSString *substring = [string substringWithRange: NSMakeRange(start, length)];
    NSString *fullHex = length == 2 ? substring : [NSString stringWithFormat: @"%@%@", substring, substring];
    unsigned hexComponent;
    [[NSScanner scannerWithString: fullHex] scanHexInt: &hexComponent];
    return hexComponent / 255.0;
}

+ (UIColor *) ColorWithHexString: (NSString *) hexString {
    NSString *colorString = [[hexString stringByReplacingOccurrencesOfString: @"#" withString: @""] uppercaseString];
    CGFloat alpha, red, blue, green;
    switch ([colorString length]) {
        case 3: // #RGB
            alpha = 1.0f;
            red   = [RNStyledDialogs colorComponentFrom: colorString start: 0 length: 1];
            green = [RNStyledDialogs colorComponentFrom: colorString start: 1 length: 1];
            blue  = [RNStyledDialogs colorComponentFrom: colorString start: 2 length: 1];
            break;
        case 4: // #ARGB
            alpha = [RNStyledDialogs colorComponentFrom: colorString start: 0 length: 1];
            red   = [RNStyledDialogs colorComponentFrom: colorString start: 1 length: 1];
            green = [RNStyledDialogs colorComponentFrom: colorString start: 2 length: 1];
            blue  = [RNStyledDialogs colorComponentFrom: colorString start: 3 length: 1];
            break;
        case 6: // #RRGGBB
            alpha = 1.0f;
            red   = [RNStyledDialogs colorComponentFrom: colorString start: 0 length: 2];
            green = [RNStyledDialogs colorComponentFrom: colorString start: 2 length: 2];
            blue  = [RNStyledDialogs colorComponentFrom: colorString start: 4 length: 2];
            break;
        case 8: // #AARRGGBB
            alpha = [RNStyledDialogs colorComponentFrom: colorString start: 0 length: 2];
            red   = [RNStyledDialogs colorComponentFrom: colorString start: 2 length: 2];
            green = [RNStyledDialogs colorComponentFrom: colorString start: 4 length: 2];
            blue  = [RNStyledDialogs colorComponentFrom: colorString start: 6 length: 2];
            break;
        default:
            return nil;
    }

    return [UIColor colorWithRed: red green: green blue: blue alpha: alpha];
}


@end
  
