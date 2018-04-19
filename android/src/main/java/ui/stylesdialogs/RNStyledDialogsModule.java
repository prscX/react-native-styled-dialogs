
package ui.stylesdialogs;

import android.content.res.Resources;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.support.annotation.NonNull;

import com.afollestad.materialdialogs.DialogAction;
import com.afollestad.materialdialogs.MaterialDialog;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.github.javiersantos.materialstyleddialogs.MaterialStyledDialog;
import com.github.javiersantos.materialstyleddialogs.enums.Style;

public class RNStyledDialogsModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNStyledDialogsModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNStyledDialogs";
  }

  @ReactMethod
  public void Show(final ReadableMap props, final Callback onSelection, final Callback onCancel) {
    this.getCurrentActivity().runOnUiThread(new Runnable() {
      @Override
      public void run() {
        String title = props.getString("title");
        String titleColor = props.getString("titleColor");

        String description = props.getString("description");
        String descriptionColor = props.getString("descriptionColor");

        String positiveText = props.getString("positiveText");
        String positiveTextColor = props.getString("positiveTextColor");

        String neutralText = props.getString("neutralText");
        String neutralTextColor = props.getString("neutralTextColor");

        String negativeText = props.getString("negativeText");
        String negativeTextColor = props.getString("negativeTextColor");

        String headerBackgroundColor = props.getString("headerBackgroundColor");
        String headerBackgroundImage = props.getString("headerBackgroundImage");

        String headerTitle = props.getString("headerTitle");
        String headerIcon = props.getString("headerIcon");
        boolean headerIconAnimation = props.getBoolean("headerIconAnimation");

        boolean dialogAnimation = props.getBoolean("dialogAnimation");
        boolean darkerOverlay = props.getBoolean("darkerOverlay");

        boolean scrollable = props.getBoolean("scrollable");
        int maxLines = props.getInt("maxLines");

        boolean cancelable = props.getBoolean("cancelable");
        boolean autoDismiss = props.getBoolean("autoDismiss");


        MaterialStyledDialog.Builder dialog = new MaterialStyledDialog.Builder(reactContext.getCurrentActivity())
                .setTitle(title)
                .setDescription(description)
                .setPositiveText(positiveText)
                .setNegativeText(negativeText)
                .setNeutralText(neutralText);

        if (positiveText.length() > 0) {
          dialog.onPositive(new MaterialDialog.SingleButtonCallback() {
            @Override
            public void onClick(@NonNull MaterialDialog dialog, @NonNull DialogAction which) {
              onSelection.invoke("positive");
            }
          });
        }
        if (neutralText.length() > 0) {
          dialog.onNeutral(new MaterialDialog.SingleButtonCallback() {
            @Override
            public void onClick(@NonNull MaterialDialog dialog, @NonNull DialogAction which) {
              onSelection.invoke("neutral");
            }
          });
        }
        if (negativeText.length() > 0) {
          dialog.onNegative(new MaterialDialog.SingleButtonCallback() {
            @Override
            public void onClick(@NonNull MaterialDialog dialog, @NonNull DialogAction which) {
              onSelection.invoke("negative");
            }
          });
        }

        if (headerBackgroundImage.length() > 0) {
          Resources resources = reactContext.getApplicationContext().getResources();
          headerBackgroundImage = headerBackgroundImage.substring(0, headerBackgroundImage.lastIndexOf("."));

          final int resourceId = resources.getIdentifier(headerBackgroundImage, "drawable", reactContext.getPackageName());

          dialog = dialog.setHeaderDrawable(resourceId);
        }
        if (headerIcon.length() > 0) {
          dialog = dialog.setStyle(Style.HEADER_WITH_ICON);

          Resources resources = reactContext.getApplicationContext().getResources();
          headerIcon= headerIcon.substring(0, headerIcon.lastIndexOf("."));

          final int resourceId = resources.getIdentifier(headerIcon, "drawable", reactContext.getPackageName());

          dialog = dialog.setIcon(resourceId);
        }
        if (headerTitle.length() > 0) {
          dialog = dialog.setStyle(Style.HEADER_WITH_TITLE);

          dialog = dialog.setTitle(headerTitle);
        }
        if (headerBackgroundColor.length() > 0) {
          dialog = dialog.setHeaderColorInt(Color.parseColor(headerBackgroundColor));
        }

        dialog = dialog.withIconAnimation(headerIconAnimation);

        dialog = dialog.withDarkerOverlay(darkerOverlay);
        dialog = dialog.withDialogAnimation(dialogAnimation);

        dialog = dialog.autoDismiss(autoDismiss);
        dialog = dialog.setScrollable(scrollable, maxLines);
        dialog = dialog.setCancelable(cancelable);

        dialog.show();
      }
    });
  }
}