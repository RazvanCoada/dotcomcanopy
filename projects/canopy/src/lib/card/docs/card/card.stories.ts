import { Component, Input } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
} from '@angular/forms';
import { moduleMetadata, StoryFn } from '@storybook/angular';
import { NgFor, NgIf } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

import {
  lgIconChevronLeft,
  lgIconArrowRight,
  LgIconComponent,
  LgIconRegistry,
  lgIconLinkExternal,
  lgIconChevronRight,
} from '../../../icon';
import { LgCardComponent } from '../../card.component';
import { LgCardGroupComponent } from '../../card-group/card-group.component';
import { LgCardHeaderComponent } from '../../card-header/card-header.component';
import { LgCardTitleComponent } from '../../card-title/card-title.component';
import { LgCardFooterComponent } from '../../card-footer/card-footer.component';
import { LgCardContentComponent } from '../../card-content/card-content.component';
import {
  LgGridColDirective,
  LgGridContainerDirective,
  LgGridRowDirective,
} from '../../../grid';
import { LgMarginDirective, LgPaddingDirective } from '../../../spacing';
import { LgButtonComponent, LgButtonToggleDirective } from '../../../button';
import { LgHintComponent, LgInputDirective, LgInputFieldComponent } from '../../../forms';
import { LgBreadcrumbComponent, LgBreadcrumbItemComponent } from '../../../breadcrumb';
import { LgHeadingComponent } from '../../../heading';
import { LgCardToggableContentComponent } from '../../card-toggable-content/card-toggable-content.component';
import { LgCardSubheadingComponent } from '../../card-subheading/card-subheading.component';
import { LgCardNavigationTitleComponent } from '../../card-navigation-title/card-navigation-title.component';
import { LgCardPrincipleDataPointLabelComponent } from '../../card-principle-data-point-label/card-principle-data-point-label.component';
import { LgCardPrincipleDataPointComponent } from '../../card-principle-data-point/card-principle-data-point.component';
import { LgCardPrincipleDataPointValueComponent } from '../../card-principle-data-point-value/card-principle-data-point-value.component';
import { LgCardSubtitleComponent } from '../../card-subtitle/card-subtitle.component';
import { LgCardContentInnerDataPointsComponent } from '../../card-content-inner-data-points/card-content-inner-data-points.component';
import {
  LgDataPointComponent,
  LgDataPointLabelComponent,
  LgDataPointValueComponent,
} from '../../../data-point';
import {
  LgLinkMenuComponent,
  LgLinkMenuItemComponent,
  LgLinkMenuItemTextComponent,
} from '../../../link-menu';

const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const formJourneyTemplate = `
  <div lgContainer>
    <div lgRow>
      <div lgCol="12" lgColLg="6" lgColLgOffset="3" lgColMd="10" lgColMdOffset="1">
        <form [formGroup]="form" (ngSubmit)="onSubmit(form)">
          <lg-card lgPadding="none">
            <lg-card-header lgPadding="sm" lgPaddingBottom="xs" lgMarginBottom="lg">
              <lg-breadcrumb lgMarginBottom="none">
                <lg-breadcrumb-item>
                  <a href="#">
                    <lg-icon name="chevron-left"></lg-icon>
                    Back
                  </a>
                </lg-breadcrumb-item>
              </lg-breadcrumb>
            </lg-card-header>
            <lg-card-content>
              <div lgContainer>
                <div lgRow>
                  <div lgCol="12" lgColMd="10" lgColMdOffset="1">
                    <lg-card-title headingLevel="3" lgPaddingBottom="md">{{title}}</lg-card-title>
                    <p>{{cardContent}}</p>

                    <lg-input-field [block]="true">
                      {{label}}
                      <lg-hint *ngIf="hint">{{hint}}</lg-hint>
                      <input lgInput formControlName="accountNumber" size="8" />
                    </lg-input-field>
                  </div>
                </div>
              </div>
            </lg-card-content>
            <lg-card-footer>
              <div lgContainer>
                <div lgRow>
                  <div lgCol="12" lgColMd="10" lgColMdOffset="1">
                    <button
                      lg-button
                      type="button"
                      variant="secondary-dark"
                      lgMarginRight="sm"
                    >
                      Back
                    </button>
                    <button lg-button type="submit" variant="primary-dark">
                      Confirm
                    </button>
                    <p lgPaddingBottom="md">{{policy}}</p>
                  </div>
                </div>
              </div>
            </lg-card-footer>
          </lg-card>
        </form>
      </div>
    </div>
  </div>`;

@Component({
  selector: 'lg-form-journey',
  template: formJourneyTemplate,
  standalone: true,
  imports: [
    NgIf,
    LgGridContainerDirective,
    LgGridRowDirective,
    LgGridColDirective,
    LgPaddingDirective,
    LgMarginDirective,
    LgButtonComponent,
    LgCardFooterComponent,
    LgInputFieldComponent,
    LgInputDirective,
    LgCardTitleComponent,
    ReactiveFormsModule,
    LgCardContentComponent,
    LgCardComponent,
    LgBreadcrumbComponent,
    LgBreadcrumbItemComponent,
    LgIconComponent,
    LgHintComponent,
    LgCardHeaderComponent,
    LgHeadingComponent,
  ],
})
class FormJourneyComponent {
  @Input() title: string;
  @Input() cardContent: string;
  @Input() hint: string;
  @Input() policy: string;
  @Input() label: string;

  form: UntypedFormGroup;

  constructor(
    private registry: LgIconRegistry,
    public fb: UntypedFormBuilder,
  ) {
    this.registry.registerIcons([ lgIconChevronLeft ]);
    this.form = this.fb.group({ accountNumber: { value: '', disabled: false } });
  }

  onSubmit(event): void {
    /* eslint-disable-next-line no-console */
    console.log('submit', event);
  }
}

const showMoreCardTemplate = `
<lg-card>
    <lg-card-header>
      <lg-card-title [headingLevel]="2">
        Example of showing/hiding more content
      </lg-card-title>
    </lg-card-header>
    <lg-card-content>
      <lg-card-subheading [headingLevel]="3">Subheading</lg-card-subheading>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.

      <lg-card-toggable-content>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
        amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
        aliquam quaerat voluptatem.
      </lg-card-toggable-content>

      <div lgMarginTop="md">
        <button lg-button type="button" variant="link" lgButtonToggle (toggleActive)="toggleActive($event)"
                lgMarginBottom="none">
          <ng-container *ngIf="isToggleActive">
            Show less
          </ng-container>
          <ng-container *ngIf="!isToggleActive">
            Show more
          </ng-container>
        </button>
      </div>
    </lg-card-content>
  </lg-card>
`;

@Component({
  selector: 'lg-card-show-more',
  template: showMoreCardTemplate,
  standalone: true,
  imports: [
    NgIf,
    LgCardToggableContentComponent,
    LgCardSubheadingComponent,
    LgCardContentComponent,
    LgCardTitleComponent,
    LgCardHeaderComponent,
    LgCardComponent,
    LgMarginDirective,
    LgButtonComponent,
    LgButtonToggleDirective,
  ],
})
class ShowMoreCardComponent {
  isToggleActive: boolean;

  toggleActive(state: boolean): void {
    this.isToggleActive = state;
  }
}

const navigationCardTemplate = `
<lg-card>
  <lg-card-header>
    <lg-card-navigation-title [title]="title" [link]="link" [queryParams]="queryParams" [queryParamsHandling]="queryParamsHandling" [headingLevel]="headingLevel"></lg-card-navigation-title>
  </lg-card-header>
  <lg-card-content>
    <lg-card-subheading [headingLevel]="headingLevel + 1">Subheading</lg-card-subheading>
    {{cardContent}} <a href="#">Test link</a>.
  </lg-card-content>
</lg-card>
`;

@Component({
  selector: 'lg-card-navigation',
  template: navigationCardTemplate,
  standalone: true,
  imports: [
    LgCardSubheadingComponent,
    LgCardContentComponent,
    LgCardHeaderComponent,
    LgCardComponent,
    LgCardNavigationTitleComponent,
    LgIconComponent,
  ],
})
class NavigationCardComponent {
  @Input() title: string;
  @Input() cardContent: string;
  @Input() link: string;
  @Input() queryParams: string;
  @Input() queryParamsHandling: string;
  @Input() headingLevel: string;
  isToggleActive: boolean;

  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons([ lgIconArrowRight ]);
  }

  toggleActive(state: boolean): void {
    this.isToggleActive = state;
  }
}

const dataPointsCardTemplate = `
<lg-card>
  <lg-card-header>
    <lg-card-navigation-title title="Data Points" link="#" [headingLevel]="2"></lg-card-navigation-title>
  </lg-card-header>
  <lg-card-content>
    <lg-card-content-inner-data-points>
      <lg-data-point *ngFor="let number of [].constructor(dataPoints); let i = index;">
        <lg-data-point-label [headingLevel]="3">
          {{data[i].label}}
        </lg-data-point-label>
        <lg-data-point-value>
          {{data[i].value}}
        </lg-data-point-value>
      </lg-data-point>
    </lg-card-content-inner-data-points>
  </lg-card-content>
  <lg-card-footer lgPaddingTop="none">
    <lg-link-menu>
      <a href="" target="_blank">
        <lg-link-menu-item>
          <lg-link-menu-item-text isBold="true">Link menu item 1</lg-link-menu-item-text>
        </lg-link-menu-item>
      </a>
      <a href="">
        <lg-link-menu-item>
          <lg-link-menu-item-text isBold="true">Link menu item 2</lg-link-menu-item-text>
        </lg-link-menu-item>
      </a>
    </lg-link-menu>
  </lg-card-footer>
</lg-card>
`;

@Component({
  selector: 'lg-card-data-points',
  template: dataPointsCardTemplate,
  standalone: true,
  imports: [
    LgCardContentComponent,
    LgCardHeaderComponent,
    LgCardComponent,
    LgCardNavigationTitleComponent,
    LgCardContentInnerDataPointsComponent,
    LgDataPointComponent,
    LgDataPointLabelComponent,
    LgDataPointValueComponent,
    LgCardFooterComponent,
    LgLinkMenuComponent,
    LgLinkMenuItemComponent,
    LgLinkMenuItemTextComponent,
    LgPaddingDirective,
    NgFor,
    RouterTestingModule,
  ],
})
class DataPointsCardComponent {
  @Input() dataPoints: number;
  @Input() data: Array<never>;

  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons([
      lgIconArrowRight,
      lgIconLinkExternal,
      lgIconChevronRight,
    ]);
  }
}

const cardGroupTemplate = `
<div lgContainer>
  <div lgRow>
    <div lgCol="12">
      <aside lg-card-group>
        <lg-card>
          <lg-card-header>
            <lg-card-navigation-title title="The title" link="https://www.landg.com"
                                      [headingLevel]="2"></lg-card-navigation-title>
          </lg-card-header>
          <lg-card-content>
            {{ cardContent }} <a href="#">Test link</a>.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.
          </lg-card-content>
        </lg-card>
        <lg-card *ngFor="let i of [].constructor(additionalCards)">
          <lg-card-header>
            <lg-card-navigation-title title="The title" link="https://www.landg.com"
                                      headingLevel="2"></lg-card-navigation-title>
          </lg-card-header>
          <lg-card-content>
            {{ cardContent }} <a href="#">Test link</a>.
          </lg-card-content>
          <lg-card-footer lgMarginTop="md" lgPaddingTop="none">
            <lg-link-menu>
              <a href="" target="_blank">
                <lg-link-menu-item>
                  <lg-link-menu-item-text isBold="true">Link menu item 1</lg-link-menu-item-text>
                </lg-link-menu-item>
              </a>
              <a href="">
                <lg-link-menu-item>
                  <lg-link-menu-item-text isBold="true">Link menu item 2</lg-link-menu-item-text>
                </lg-link-menu-item>
              </a>
            </lg-link-menu>
          </lg-card-footer>
        </lg-card>
      </aside>
    </div>
  </div>
</div>`;

@Component({
  selector: 'lg-card-group',
  template: cardGroupTemplate,
  standalone: true,
  imports: [
    LgCardContentComponent,
    LgCardNavigationTitleComponent,
    LgCardHeaderComponent,
    LgLinkMenuItemTextComponent,
    LgLinkMenuItemComponent,
    LgLinkMenuComponent,
    LgCardFooterComponent,
    LgCardComponent,
    LgCardGroupComponent,
    LgGridColDirective,
    LgGridRowDirective,
    LgGridContainerDirective,
    NgFor,
    LgMarginDirective,
    LgPaddingDirective,
  ],
})
class GroupCardComponent {
  @Input() cardContent: never;
  @Input() additionalCards: number;

  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons([
      lgIconArrowRight,
      lgIconLinkExternal,
      lgIconChevronRight,
    ]);
  }
}

export default {
  title: 'Components/Card/Examples',
  decorators: [
    moduleMetadata({
      imports: [
        FormJourneyComponent,
        ShowMoreCardComponent,
        NavigationCardComponent,
        DataPointsCardComponent,
        GroupCardComponent,
        LgCardComponent,
        LgCardHeaderComponent,
        LgCardTitleComponent,
        LgCardSubtitleComponent,
        LgCardSubheadingComponent,
        LgCardContentComponent,
        LgCardPrincipleDataPointComponent,
        LgCardPrincipleDataPointLabelComponent,
        LgCardPrincipleDataPointValueComponent,
        LgCardNavigationTitleComponent,
        LgCardContentInnerDataPointsComponent,
        LgGridContainerDirective,
        LgGridRowDirective,
        LgGridColDirective,
      ],
    }),
  ],
  parameters: {
    backgrounds: {
      default: 'White Smoke',
    },
  },
};

const defaultCardTemplate = `
<lg-card>
  <lg-card-header>
    <lg-card-title [headingLevel]="headingLevel">
      {{title}}
    </lg-card-title>
  </lg-card-header>
  <lg-card-content>
    <lg-card-subheading [headingLevel]="headingLevel + 1">Subheading</lg-card-subheading>
    {{cardContent}} <a href="#">Test link</a>.
  </lg-card-content>
</lg-card>
`;

const defaultCardStory: StoryFn<LgCardComponent> = (args: LgCardComponent) => ({
  props: args,
  template: defaultCardTemplate,
});

export const defaultCard = defaultCardStory.bind({});
defaultCard.storyName = 'Standard';

defaultCard.args = {
  headingLevel: 2,
  title: 'The title',
  cardContent: content,
};

defaultCard.parameters = {
  docs: {
    source: {
      code: defaultCardTemplate,
    },
  },
};

const navigationCardStory: StoryFn<LgCardComponent> = (args: LgCardComponent) => ({
  props: args,
  template:
    '<lg-card-navigation [title]="title" [link]="link" [queryParams]="queryParams" [queryParamsHandling]="queryParamsHandling" [headingLevel]="headingLevel" [cardContent]="cardContent"></lg-card-navigation>',
});

export const navigationCard = navigationCardStory.bind({});
navigationCard.storyName = 'Card navigation';

navigationCard.args = {
  link: 'https://www.landg.com',
  queryParams: null,
  queryParamsHandling: null,
  headingLevel: 2,
  title: 'The title',
  cardContent: content,
};

navigationCard.parameters = {
  docs: {
    source: {
      code: navigationCardTemplate,
    },
  },
};

navigationCard.argTypes = {
  queryParams: {
    table: {
      disable: true,
    },
  },
  queryParamsHandling: {
    table: {
      disable: true,
    },
  },
};

const productCardTemplate = `
<lg-card>
  <lg-card-content>
    <div lgRow>
      <div lgCol="12" lgColMd="6">
        <lg-card-title headingLevel="4">
          <a href="#">{{title}}</a>
        </lg-card-title>
        <lg-card-subtitle>
          Payroll Reference Number P23456
        </lg-card-subtitle>
      </div>
      <lg-card-principle-data-point lgCol="12" lgColMd="6">
        <lg-card-principle-data-point-label>
          Last payment (after tax and deductions)
        </lg-card-principle-data-point-label>
        <lg-card-principle-data-point-value>
          <span><span class="lg-font-size-3">£</span>230.20</span>
        </lg-card-principle-data-point-value>
        <lg-card-principle-data-point-date>
          as of 01 Jan 2020
        </lg-card-principle-data-point-date>
      </lg-card-principle-data-point>
    </div>
  </lg-card-content>
</lg-card>
`;

const productCardStory: StoryFn<LgCardComponent> = (args: LgCardComponent) => ({
  props: args,
  template: productCardTemplate,
});

export const productCard = productCardStory.bind({});
productCard.storyName = 'Product';

productCard.args = {
  title: 'Standard Lifetime Annuity Joint Life Full',
};

productCard.parameters = {
  docs: {
    source: {
      code: productCardTemplate,
    },
  },
};

const formJourneyCardStory: StoryFn<LgCardComponent> = (args: LgCardComponent) => ({
  props: args,
  template: `
    <lg-form-journey [title]="title" [cardContent]="cardContent" [hint]="hint" [policy]="policy" [label]="label"></lg-form-journey>
  `,
});

export const formJourneyCard = formJourneyCardStory.bind({});
formJourneyCard.storyName = 'Form journey';

formJourneyCard.args = {
  title: 'New bank details',
  cardContent:
    'Any changes today are unlikely to be processed in time for your next payment, due no later January.',
  hint: 'Must be 8 digits long',
  policy:
    'By completing this form you are confirming you have consent to share these details with us. See our privacy policy.',
  label: 'Account Number',
};

formJourneyCard.parameters = {
  docs: {
    source: {
      code: formJourneyTemplate,
    },
  },
};

const showMoreCardStory: StoryFn<LgCardComponent> = (args: LgCardComponent) => ({
  props: args,
  template: `
    <lg-card-show-more></lg-card-show-more>
  `,
});

export const showMoreCard = showMoreCardStory.bind({});
showMoreCard.storyName = 'Show more';

showMoreCard.parameters = {
  docs: {
    source: {
      code: showMoreCardTemplate,
    },
  },
};

const dataPointsCardStory: StoryFn<LgCardComponent> = (args: LgCardComponent) => ({
  props: args,
  template:
    '<lg-card-data-points [dataPoints]="dataPoints" [data]="data"></lg-card-data-points>',
});

export const dataPointsCard = dataPointsCardStory.bind({});
dataPointsCard.storyName = 'Data points';

dataPointsCard.parameters = {
  docs: {
    source: {
      code: dataPointsCardTemplate,
    },
  },
};

dataPointsCard.argTypes = {
  dataPoints: {
    control: { type: 'number', min: 1, max: 3, step: 1 },
  },
};

dataPointsCard.args = {
  dataPoints: 3,
  data: [
    {
      label: 'Data key 1',
      value: 'Data value 1',
    },
    {
      label: 'Data key 2',
      value: 'Data value 2',
    },
    {
      label: 'Data key 3',
      value: 'Data value 3',
    },
  ],
};

const cardGroupTemplateStory: StoryFn<LgCardGroupComponent> = (
  args: LgCardGroupComponent,
) => ({
  props: args,
  template:
    '<lg-card-group [cardContent]="cardContent" [additionalCards]="additionalCards"></lg-card-group>',
});

export const cardGroup = cardGroupTemplateStory.bind({});
cardGroup.storyName = 'Card group';

cardGroup.args = {
  cardContent: content,
  additionalCards: 1,
};

cardGroup.parameters = {
  docs: {
    source: {
      code: cardGroupTemplate,
    },
  },
};

cardGroup.argTypes = {
  queryParams: {
    table: {
      disable: true,
    },
  },
  queryParamsHandling: {
    table: {
      disable: true,
    },
  },
};
