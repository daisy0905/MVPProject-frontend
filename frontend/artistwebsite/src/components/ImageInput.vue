<template>
    <div>
        <div @click="launchFilePicker()">
            <slot name="activator"></slot>
        </div>
        <input type="file" ref="file" :name="uploadFieldName" @change="onFileChange(
            $event.target.name, $event.target.files)" style="display:none">
        <div max-width="300">
            <div>
                <p class="subheading">{{errorText}}</p>
                <div>
                    <div></div>
                    <!-- <button @click="errorDialog = false" flat>Got it!</button> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'image-input',
        data() {
            return {
                errorDialog: null,
                errorText: '',
                uploadFieldName: 'file',
                maxSize: 2048
            }
        },
        props: {
            value: Object,
        },
        methods: {
            launchFilePicker(){
                this.$refs.file.click();
            },
            onFileChange(fieldName, file) {
                const { maxSize } = this
                let imageFile = file[0]

                if (file.length>0) {
                    let size = imageFile.size / maxSize / maxSize
                    if (!imageFile.type.match('image.*')) {
                        this.errorDialog = true
                        this.errorText = 'Please choose an image file'
                    } else if (size>1) {
                        this.errorDialog = true
                        this.errorText = 'Your file is too big! Please select an image under 1MB'
                    } else {
                        let formData = new FormData()
                        let imageURL = URL.createObjectURL(imageFile)
                        formData.append(fieldName, imageFile)
                        this.$emit('input', { formData, imageURL })
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>