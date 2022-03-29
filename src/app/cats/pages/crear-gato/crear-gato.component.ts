import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data } from '@angular/router';
import { finalize } from 'rxjs';
import { CatService } from 'src/app/services/cat.service';
import { ICatFavorite, ICatSave } from 'src/app/services/cats.interface';

@Component({
  selector: 'app-crear-gato',
  templateUrl: './crear-gato.component.html',
  styleUrls: ['./crear-gato.component.scss']
})
export class CrearGatoComponent implements OnInit {

  public formCat!: FormGroup;
  public urlSelected: string = "";
  public favorites: ICatFavorite[] = [];
  public isSaving: boolean = false;
  constructor(
    private readonly fb: FormBuilder,
    private readonly activatedRoute: ActivatedRoute,
    private readonly catService: CatService
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.loadResolvers();
  }

  public onSubmit(form: FormGroup) {
    if (form.valid) {
      const cat: ICatSave = {
        name: form.value.name,
        age: form.value.age,
        breed: form.value.breed,
        photo: form.value.photo
      }
      this.isSaving = true;
      this.catService.saveCat(cat)
        .pipe(
          finalize(() => this.isSaving = false)
        )
        .subscribe({
          next: () => {
            this.urlSelected = "";
            this.formCat.reset();
          },
          error: () => alert("No se pudo guardar el gato")
        });
    }
  }

  public selectPhoto(photoUrl: string) {
    this.urlSelected = photoUrl;
    this.formCat.get("photo")?.setValue(photoUrl);
  }

  private loadResolvers() {
    this.activatedRoute.data.subscribe({
      next: (data: Data) => {
        this.resolveFavorites(data);
        this.resolveCatToUpdate(data);
      }
    })
  }

  private buildForm() {
    this.formCat = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      breed: this.fb.control('', [Validators.required]),
      age: this.fb.control('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      photo: this.fb.control('', [Validators.required])
    });
  }

  private resolveFavorites(data: Data) {
    this.favorites = data["favorites"]
  }

  private resolveCatToUpdate(data: Data) {
    const cat = data["cat"];
    if (cat) {
      for (let key in this.formCat.value) {
        this.formCat.get(key)?.setValue(cat[key]);
      }
    }
  }
}
