<template>
    <div class="container-fluid">
        <div class="row" id="head">
            <div class="col-md-2">
                <router-link :to="'/dataset/' + this.$route.params.datasetid" class="btn btn-default btn-lg">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    Retour
                </router-link>
            </div>
            <div class="col-md-6">
                <h1>{{variable.nom}}</h1>
            </div>
            <div class="col-md-2">
                <!-- //Tentative de modification du nom la variable//
                <div class="dropdown pull-right">
                    <button class="btn btn-default dropdown-toggle" type="button" id="renommer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Modifier le nom
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li>
                            <div class="input-group">
                                <input id="newname" type="text" class="form-control" placeholder="Nom"">
                                <span class="input-group-btn">
                                    <button v-on:click="renomme" class="btn btn-default" type="button">Ok</button>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>-->
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <table class="table table-bordered table-responsive text-center">
                    <thead>
                        <tr class="row">
                            <th class="col-md-4">
                                ID
                            </th>
                            <th class="col-md-4">
                                CodeGeo
                            </th>
                            <th class="col-md-4">
                                Valeur
                            </th>
                            <th>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="row" v-for="d in variable.donnees">
                            <td class="col-md-4">
                                <p>{{d.id}}</p>
                            </td>
                            <td class="col-md-3">
                                <p>{{d.codeGeo}}</p>
                            </td>
                            <td class="col-md-3">
                                <p>{{d.valeur}}</p>
                            </td>
                            <td class="col-md-2">
                                <button class="btn btn-danger pull-right" v-on:click='showModal(d.id)'>
                                    <span class ="glyphicon glyphicon-remove"></span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- Modal -->
                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h2 class="modal-title" id="myModalLabel">Confirmez votre choix</h2>
                            </div>
                            <div class="modal-body">
                                Etes-vous sûr de voloir supprimer la données ?
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
                                <button type="button" class="btn btn-danger" v-on:click='deleteDonnee(id)'>Supprimer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import * as DatasetTypes from '../../store/dataset/datasetTypes'
    export default{
        name:'editvariable',
        data (){
            return{
                id: 0
            }
        },
        methods:{
            /*renomme(){
                console.log($("input").val())
            },*/
            deleteDonnee(dataid){
                this.$store.dispatch(DatasetTypes.DELETE_DONNEE, dataid);
                $('#myModal').modal('hide');
            },
            showModal(i) {
                this.id = i;
                $('#myModal').modal('show');
            },
        },
        computed:{
            variable(){
                return this.$store.getters[DatasetTypes.GET_DATASET_LIST].find(d => d.id == this.$route.params.datasetid).variables.find(v => v.id == this.$route.params.variableid)
            }
        },
        created:function(){
        }
    }
</script>
