/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ProfileAvatar {
        "name": string;
        "size": string;
    }
    interface ProfileCard {
        "devmode": boolean;
    }
    interface ProfileLevel {
        "devmode": boolean;
    }
}
declare global {
    interface HTMLProfileAvatarElement extends Components.ProfileAvatar, HTMLStencilElement {
    }
    var HTMLProfileAvatarElement: {
        prototype: HTMLProfileAvatarElement;
        new (): HTMLProfileAvatarElement;
    };
    interface HTMLProfileCardElement extends Components.ProfileCard, HTMLStencilElement {
    }
    var HTMLProfileCardElement: {
        prototype: HTMLProfileCardElement;
        new (): HTMLProfileCardElement;
    };
    interface HTMLProfileLevelElement extends Components.ProfileLevel, HTMLStencilElement {
    }
    var HTMLProfileLevelElement: {
        prototype: HTMLProfileLevelElement;
        new (): HTMLProfileLevelElement;
    };
    interface HTMLElementTagNameMap {
        "profile-avatar": HTMLProfileAvatarElement;
        "profile-card": HTMLProfileCardElement;
        "profile-level": HTMLProfileLevelElement;
    }
}
declare namespace LocalJSX {
    interface ProfileAvatar {
        "name"?: string;
        "size"?: string;
    }
    interface ProfileCard {
        "devmode"?: boolean;
    }
    interface ProfileLevel {
        "devmode"?: boolean;
    }
    interface IntrinsicElements {
        "profile-avatar": ProfileAvatar;
        "profile-card": ProfileCard;
        "profile-level": ProfileLevel;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "profile-avatar": LocalJSX.ProfileAvatar & JSXBase.HTMLAttributes<HTMLProfileAvatarElement>;
            "profile-card": LocalJSX.ProfileCard & JSXBase.HTMLAttributes<HTMLProfileCardElement>;
            "profile-level": LocalJSX.ProfileLevel & JSXBase.HTMLAttributes<HTMLProfileLevelElement>;
        }
    }
}
