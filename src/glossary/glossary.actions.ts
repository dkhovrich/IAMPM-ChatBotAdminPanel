import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';

import { BaseActionService } from '../services/base-action.service';
import { IAppState } from '../redux/store';
import { IGlossary } from '../redux/reducers/glossaryReducer';
import { IdModel, IGlossaryModel } from './/glossary.models';

@Injectable()
export class GlossaryActions extends BaseActionService {
  static LOAD: string = 'LOAD_GLOSSARY';
  static CREATE: string = 'CREATE_GLOSSARY';
  static UPDATE: string = 'UPDATE_GLOSSARY';
  static REMOVE: string = 'REMOVE_GLOSSARY';

  constructor(private ngRedux: NgRedux<IAppState>) {
    super();
  }

  load(items: IGlossaryModel[]): void {
    const action = this.createAction<IGlossary>(GlossaryActions.LOAD, { items });
    this.ngRedux.dispatch(action);
  }

  create(item: IGlossaryModel): void {
    const action = this.createAction<IGlossaryModel>(GlossaryActions.CREATE, item);
    this.ngRedux.dispatch(action);
  }

  update(item: IGlossaryModel): void {
    const action = this.createAction<IGlossaryModel>(GlossaryActions.UPDATE, item);
    this.ngRedux.dispatch(action);
  }

  remove(item: IdModel): void {
    const action = this.createAction<IdModel>(GlossaryActions.REMOVE, item);
    this.ngRedux.dispatch(action);
  }
}
